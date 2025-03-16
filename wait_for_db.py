import time
import psycopg2
import os
from dotenv import load_dotenv

# load_dotenv(dotenv_path="/app/.env.development")
load_dotenv()

DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT", "5432")
# DB_PORT = os.getenv("DB_PORT", "5432")
print(f"Connecting to DB: {DB_NAME} at {DB_HOST}:{DB_PORT} with user {DB_USER}")

while True:
    try:
        conn = psycopg2.connect(
            dbname=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            host=DB_HOST,
            port=DB_PORT,
        )
        conn.close()
        print("Database is ready!")
        break
    except psycopg2.OperationalError:
        print("Database not ready, waiting...")
        time.sleep(2)
