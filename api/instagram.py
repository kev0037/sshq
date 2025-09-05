import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/instagram")
def instagram():
    username = request.args.get("username")
    if not username:
        return jsonify({"error": "No username provided"}), 400

    try:
        url = f"https://www.instagram.com/{username}/?__a=1&__d=dis"
        headers = {
            "User-Agent": "Mozilla/5.0"
        }
        res = requests.get(url, headers=headers)

        if res.status_code != 200:
            return jsonify({"error": "Failed to fetch profile"}), res.status_code

        data = res.json()

        user = data.get("graphql", {}).get("user", {})
        if not user:
            return jsonify({"error": "User not found"}), 404

        return jsonify({
            "username": user.get("username"),
            "full_name": user.get("full_name"),
            "bio": user.get("biography"),
            "pfp": user.get("profile_pic_url_hd"),
            "followers": user.get("edge_followed_by", {}).get("count"),
            "following": user.get("edge_follow", {}).get("count"),
            "posts": user.get("edge_owner_to_timeline_media", {}).get("count"),
            "private": user.get("is_private"),
            "verified": user.get("is_verified")
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500
