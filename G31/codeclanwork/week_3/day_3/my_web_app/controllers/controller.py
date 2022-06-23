from app import app

@app.route('/')
def index():
    return "Hello, i love pink"


@app.route('/<name>')
def greet(name):
    return f"Hello {name}!"    