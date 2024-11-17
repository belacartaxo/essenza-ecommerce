import sqlite3

# Database connection (or creation, if it doesn't exist)
conn = sqlite3.connect("essenza_ecommerce.db")
print("Database created/connected successfully!")
cur = conn.cursor()

cur.execute("""
    CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        phone TEXT NOT NULL,
        address TEXT NOT NULL,
        role CHECK(role IN ('client', 'admin')) DEFAULT 'client',
        created_at DATETIME NOT NULL
    );
    """)

cur.execute("""
    CREATE TABLE IF NOT EXISTS products (
        product_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price REAL NOT NULL,
        stock_quantity INTEGER DEFAULT 0,
        category_id INTEGER NOT NULL,
        image_url  TEXT NOT NULL,
        created_at DATETIME NOT NULL,
        updated_at DATETIME NOT NULL,
        FOREIGN KEY(category_id) REFERENCES categories(category_id)
    );
    """)

cur.execute("""
    CREATE TABLE IF NOT EXISTS categories (
        category_id INTEGER PRIMARY KEY AUTOINCREMENT,
        category_name TEXT NOT NULL
    );
    """)

cur.execute("""
    CREATE TABLE IF NOT EXISTS orders (
        order_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        order_status CHECK(order_status IN ('process', 'sent', 'delivered')) DEFAULT 'process',
        total_price REAL NOT NULL,
        shipping_address TEXT NOT NULL,
        created_at DATETIME NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(user_id) 
    );
    """)

cur.execute("""
    CREATE TABLE IF NOT EXISTS orders_items (
        order_item_id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL default 1,
        price_at_time real NOT NULL,
        FOREIGN KEY(order_id) REFERENCES orders(order_id) 
        FOREIGN KEY(product_id) REFERENCES products(product_id) 
    );
    """)

cur.execute("""
    CREATE TABLE IF NOT EXISTS shopping_cart (
        cart_item_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL default 1,
        FOREIGN KEY(user_id) REFERENCES users(user_id) 
        FOREIGN KEY(product_id) REFERENCES products(product_id) 
    );
    """)

cur.execute("""
    CREATE TABLE IF NOT EXISTS payments (
        payment_id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        payment_method CHECK(payment_method IN ('credit card', 'PayPal')),
        payment_status CHECK(payment_status IN ('paid', 'pending')) DEFAULT 'pending',
        payment_date DATETIME NOT NULL,
        amount REAL NOT NULL,
        FOREIGN KEY(order_id) REFERENCES orders(order_id) 
    );
    """)

cur.execute("""
    CREATE TABLE IF NOT EXISTS product_reviews (
        review_id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        rating INTEGER CHECK(RATING BETWEEN 1 AND 5),
        review_text TEXT,
        created_at DATETIME NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(user_id)
        FOREIGN KEY(product_id) REFERENCES products(product_id)  
    );
    """)

cur.execute("""
    CREATE TABLE IF NOT EXISTS product_discount (
        discount_id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id  INTEGER NOT NULL,
        discount_percentage INTEGER CHECK(discount_percentage BETWEEN 0 AND 100) NOT NULL,
        valid_to DATETIME NOT NULL,
        created_at DATETIME NOT NULL,
        FOREIGN KEY(product_id) REFERENCES products(product_id) 
    );
    """)


conn.close()
print("Database disconnected successfully!")