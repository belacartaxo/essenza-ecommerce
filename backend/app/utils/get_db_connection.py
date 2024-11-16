import sqlite3

def get_db_connection():
    conn = sqlite3.connect('../database/essenza_ecommerce.db')
    conn.row_factory = sqlite3.Row  # Allows access to columns by name
    return conn