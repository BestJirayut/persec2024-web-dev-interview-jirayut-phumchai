SELECT
       p.product_name,
       SUM(od.quantity) AS total_quantity
FROM order_details od
JOIN orders o ON od.order_id = o.order_id
JOIN products p ON od.product_id = p.product_id
WHERE strftime('%Y', o.order_date) = '2016'
GROUP BY p.product_name
ORDER BY total_quantity DESC
LIMIT 5;

----------------------------------------------------------------------------------------------------------

WITH Sales AS (
    SELECT
        p.product_name,
        strftime('%Y', o.order_date) AS year,
        SUM(od.quantity) AS total_quantity,
        RANK() OVER(PARTITION BY strftime('%Y', o.order_date) ORDER BY SUM(od.quantity) DESC) AS rank
    FROM
        orders o
    JOIN
        order_details od ON o.order_id = od.order_id
    JOIN
        products p ON od.product_id = p.product_id
    GROUP BY
        p.product_name, year
)

SELECT
    product_name
FROM (
    SELECT
        product_name,
        SUM(CASE WHEN year = '2016' THEN total_quantity ELSE 0 END) AS in_2016,
        SUM(CASE WHEN year = '2017' THEN total_quantity ELSE 0 END) AS in_2017
    FROM
        Sales
    WHERE
        rank <= 5
    GROUP BY
        product_name
) AS RankedProducts
WHERE
    in_2016 > 0 AND in_2017 > 0
GROUP BY
    product_name
ORDER BY
    product_name;

--------------------------------------------------------------------------------
SELECT
    year,
    SUM(ROUND((quantity * unit_price) - disc)) AS Profixt
FROM (
    SELECT
        strftime('%Y', o.order_date) AS year,
        od.quantity,
        p.unit_price,
        ROUND(od.quantity * (p.unit_price * od.discount)) AS disc,
        od.discount
    FROM
        orders o
    JOIN
        order_details od ON o.order_id = od.order_id
    JOIN
        products p ON od.product_id = p.product_id
    WHERE
        o.ship_region = 'Western Europe'
) AS subquery
GROUP BY
    year;