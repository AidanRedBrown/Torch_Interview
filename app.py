from flask import Flask, jsonify, send_from_directory
from server import weather

app = Flask(__name__, static_folder="server/static")

# API endpoint: fetch weather
@app.route("/api/weather/<location>")
def api_weather(location):
    try:
        data = weather.fetch_weather(location)
        return jsonify({"location": location, "weather": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Requests page
@app.route("/requests")
def view_requests():
    recent = weather.get_recent_requests(limit=10)  # last 10 requests
    return jsonify(recent)

# Weather display page
@app.route("/<location>")
def weather_page(location):
    return send_from_directory(app.static_folder, "weather.html")

# Root page
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(port=3000, debug=True)