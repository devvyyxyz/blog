---
title: How to Make Post Flairs Required on Your Subreddit
description: A step-by-step guide on setting up mandatory post flairs in your subreddit to improve organization and user experience.
pubDate: Feb 07 2025
heroImage: /images/blog-placeholder-1.png
---
## Introduction

Post flairs are an essential tool for organizing content on Reddit. They help users quickly identify post categories, making subreddit navigation easier. If you're a moderator and want to **make post flairs required** on your subreddit, this guide will show you how to enforce flair usage using Reddit's built-in features and AutoModerator.

---
## Step 1: Enable Post Flair in Your Subreddit

Before making flairs mandatory, ensure that your subreddit has post flair enabled:

1. Go to your subreddit and click on **"Mod Tools"** (on the right sidebar).
2. Scroll down to **"Post flair settings"** under the **Content and Controls** section.
3. Toggle **"Enable post flair in this community"** to ON.
4. (Optional) Check **"Allow users to assign their own flair"** if you want users to select their own flairs.
---
## Step 2: Create Post Flairs

If you haven't already, set up the post flairs that users will be required to use:

5. In **Mod Tools**, navigate to **"Post Flairs"**.
6. Click **"Add post flair"**.
7. Enter a **Flair Name** (e.g., "Discussion," "Help," "News").
8. Choose a **Flair Color** and **Text Color** for visibility.
9. (Optional) Toggle **"Allow user edits"** if users should modify the flair text.
10. Click **"Save"** and repeat for additional flairs.
---
## Step 3: Use AutoModerator to Enforce Flair Usage

Reddit does not have a built-in way to force flairs, so you'll need to use **AutoModerator**, a powerful tool for enforcing subreddit rules.

1. Go to **Mod Tools > Automoderator**.
2. Click **"Edit Automoderator Config"**.
3. Add the following rule:

```yaml
   ---
   type: submission
   author:
     is_contributor: false
   title (regex): '.*'
   set_flair: 
     text: "Uncategorized"
     css_class: "uncategorized"
   action: filter
   message: "Your post has been removed because it does not have a flair. Please select a flair and resubmit."
```

4. Save your changes.

### How This Rule Works:
- If a user submits a post without selecting a flair, AutoModerator will remove it.
- The user will receive a removal message explaining that they must select a flair before resubmitting.
- This ensures that every post has a required flair before appearing in the subreddit.
---
## Step 4: Test and Notify Users

  After setting up the rule:
5. Test by submitting a post without a flair to confirm that AutoModerator removes it.
6. Create a sticky post informing users that flairs are now mandatory and explaining their purpose.
7. Consider updating your subreddit rules to reflect this requirement.
---
## Step 5: Monitor and Adjust
- If users are still struggling to use flairs, provide a simple tutorial in the subreddit sidebar or pinned post.
- Adjust AutoModerator settings if necessary, such as auto-applying default flairs instead of removing posts.
- Engage with your community to gather feedback and improve flair categories.
---
## Conclusion
Requiring post flairs in your subreddit is a great way to improve organization, enforce categorization, and enhance user experience. By enabling post flair, setting up AutoModerator, and notifying users, you can ensure that all posts are correctly tagged—making moderation easier and discussions more structured.

If you found this guide helpful, consider sharing it with other Reddit moderators looking to optimize their communities!