from flask import Flask, request, jsonify
import base64
from pathlib import Path

app = Flask(__name__)

@app.route('/save-image', methods=['POST'])
def save_image():
    data = request.json
    if data is None:
        return jsonify({'status': 'error', 'message': 'No JSON payload received'}), 400

    if 'imageData' not in data:
        return jsonify({'status': 'error', 'message': 'Invalid data format'}), 400

    image_data = data['imageData']
    try:
        header, encoded = image_data.split(",", 1)
        image_data = base64.b64decode(encoded)
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 400

    file_path = Path('/Users/amilvila/PycharmProjects/trade_soxl_soxs/pythonProject1/15_minute_json/15_minute_ADX.png')
    with open(file_path, 'wb') as f:
        f.write(image_data)

    return jsonify({'status': 'success', 'path': str(file_path)})

if __name__ == '__main__':
    app.run(port=5003, debug=True)
