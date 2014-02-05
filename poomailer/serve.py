"""
Base Flask App
"""

from flask import Flask, render_template, request
app = Flask(__name__)

from ship import ship_to_address

@app.route("/")
def hello():
    return render_template('home.html', title='Home')

@app.route("/submit", methods=["POST"])
def submit():
    address_dict = {
        'name': request.form['name'],
        'street1': request.form['address_line1'],
        'street2': request.form['address_line2'],
        'city': request.form['city'],
        'state': request.form['region'],
        'zip': request.form['postal_code'],
        'country': request.form['country'],
    }
    status = ship_to_address(address_dict)
    return status

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=9001)