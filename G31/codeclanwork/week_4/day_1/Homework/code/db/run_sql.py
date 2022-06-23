import sqlite3
import os


# run_sql.py important file(must have)

def get_db():
    path = os.path.dirname(os.path.abspath(__file__))
    db = os.path.join(path, "task_manager.db")
    # accessing database
    conn = sqlite3.connect(db)
    conn.execute("PRAGMA foreign_keys = 1")
    #  makes sure foreign keys cant be None
    conn.row_factory = sqlite3.Row
    # brings back a row
    return conn
    #  return the connection

    # this will be the same for our own projects apart from the datatbase its accessing. 


def run_sql(sql, values = []):
    # passing in the sql we want to run, will also need to passs in a list of values.
    db = get_db()
    #  execute the function above
    cursor = db.cursor()
    # take a cursor from the database
    cursor.execute(sql, values)
    # execute the cursor
    results = cursor.fetchall()
    # give us back all the rows that are fetched from the database.
    db.commit()
    # commits all previous code
    db.close()
    # closes the open connections
    return results