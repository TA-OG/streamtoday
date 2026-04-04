# StreamToday "One-Source" Automation Setup

This workflow allows you to post a single video file to YouTube Shorts, Instagram Reels, and TikTok simultaneously.

## 1. n8n Configuration
The workflow is located at: `/root/.openclaw/workspace/projects/streamtoday/automation/one-source-workflow.json`
Import this JSON into your n8n instance on Hetzner.

## 2. API Credentials Required

### YouTube Data API v3
- **Console:** Google Cloud Console
- **Scopes:** `youtube.upload`
- **Setup:** Create OAuth 2.0 credentials and add them to n8n as `YouTube OAuth2`.

### Instagram Graph API
- **Requirement:** You must convert `@StreamToday_studios` to a **Business** or **Creator** account.
- **Setup:** Link Instagram to a Facebook Page. Create a Meta Developer App. Add `instagram_business` scope.
- **n8n:** Add credentials as `Instagram OAuth2`.

### TikTok for Developers
- **Console:** developers.tiktok.com
- **Setup:** Create an app. Request `video.upload` scope.
- **n8n:** Add credentials as `TikTok OAuth2`.

## 3. How to Use
1. **Upload:** Send a POST request to the n8n webhook URL with the following JSON body:
   ```json
   {
     "title": "The Nottingham Podcast Studio That Edits While You Record",
     "description": "Live editing means you walk out with finished content. #Nottingham #Podcast",
     "videoUrl": "https://your-server.com/path/to/video.mp4"
   }
   ```
2. **Automation:** n8n will fetch the video and push it to all three platforms.

## 4. WhatsApp Status Integration
To post to WhatsApp Status, we need a **WhatsApp Business API** provider (like Meta's Cloud API or 360dialog). 
- **Note:** The WhatsApp Business API does not currently support programmatic "Status" updates for personal accounts. 
- **Workaround:** The automation will send the final video back to your phone via Telegram/Signal, and you can manually tap "Post to Status" on WhatsApp.
