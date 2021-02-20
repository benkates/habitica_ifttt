# Add a Habitica to-do with Google Cloud Functions and IFTTT (If This Then That)

As the title describes, follow the instructions below to use your IFTTT to add a new Habitica to-do item (commonly used with Google Assistant).

This solution was created out of necessity since the [glitch.me-based solution](https://habitica.fandom.com/wiki/Habitica_To-Do_Action_for_IFTTT) no longer works due to Glitch rejecting requests from IFTTT.

## Setup

You'll need to have the following ready:

- Habitica User ID and API key
- A valid [Google Cloud account](https://cloud.google.com/billing/docs/how-to/manage-billing-account) with payment method added (this will incur pennies of cost (if any) - first year of GCP gives a $300 credit)
- A [Google Cloud project](https://console.cloud.google.com/cloud-resource-manage)
- An [IFTTT](ifttt.com) applet

## Get Habitica User ID and API Key

1. Go to your [Habitica API Settings](https://habitica.com/user/settings/api) and have them ready for later.

## Create Google Cloud Function

2. Once you've completed the Google Cloud account setup and project creation, you'll need to [activate the Cloud Functions API](https://console.cloud.google.com/marketplace/product/google/cloudfunctions.googleapis.com).

3. [Create a new Cloud Function](https://console.cloud.google.com/functions/list).

4. You'll need to name the function, select a region, and select "Allow unauthenticated invocations".

IMAGE

5. Scroll down to Environment Variables and create three, that look like the following (make up a random app key to use)

IMAGE

6. Click next and enter "habitica" in the Entry point field.

7. Create two files, one called `server.js` and one `package.json` and copy the code in this repository into those files.

8. Click deploy at the bottom and in a few minutes you should have a URL endpoint to use!

9. Once deployed, click on the name of your function and click on the "Trigger" tab. Take note of the URL, you'll need it in the next section.

IMAGE

## Setup IFTTT Applet (steps copied from original Glitch article)

10. In [IFTTT](ifttt.com), click New Applet to create the action.

11. Click +this to specify the service to be triggered with the "If" condition. For example: Google Assistant, Amazon Alexa, Weather Underground, or browse the services & use your imagination! Note: If this is your first time adding this connection, follow the prompts to grant access to the service.

12. Click +that to add the "Then" condition. Search for "Webhooks" and Connect then select the Make web request action.

13. Fill in the web request dialog:
- Select "POST" from the Method dropdown.
- In the Body field, enter: {"key":"your-app-key","title":"{{your-ingredient}}"}. After you've typed "title", click Add ingredient and select the field you want to use as the title for your To Do item, this will fill in your-ingredient. Replace your-app-key with the key you came up with earlier.
- In the URL field, enter your Google Cloud Functions trigger url. This will have the format: https://us-central1-project-name.cloudfunctions.net/habitica-todo.
- Select "application/json" from the Content Type dropdown.

IMAGE

14. Click done and test it out! Hopefully you have a new voice-activated webhook for Habitica ready to go!
