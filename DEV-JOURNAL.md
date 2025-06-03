# 🛠️ Dev Journal: Shop2Give

## 🧩 Context
**Event:** [World’s Largest Hackathon presented by Bolt](https://worldslargesthackathon.devpost.com/?ref_feature=challenge&ref_medium=discover)  
**Challenge:** Build with AI for a shot at some of the $1M+ in prizes.

---

## 🚀 Day 1: Hackathon Kickoff

### ✅ 1. Watched the Livestream
**Session:** *World’s Largest Hackathon Kickoff: Live with Greg Isenberg & Eric Simons*  
🔗 [Watch on YouTube](https://youtu.be/KY8xaxkQz0w?si=9W_kYX6s2-K3WDD8)

### 🤖 2. Generated Prompt with ChatGPT
I used ChatGPT to craft a detailed AI prompt to build a faith-driven crowdfunding platform called **Shop2Give**.

📄 [Read the prompt](./bolt/01_MAIN_PAGE.md)

> **Prompt Summary:**
> - Platform Name: **Shop2Give**
> - Tagline: *"Buy with purpose. Give with heart."*
> - Mission: Connect meaningful shopping to life-changing causes
> - Features:
>   - Campaign setup & AI-guided flow
>   - Public donation & product-driven giving
>   - Fundraiser dashboard
>   - Donation tracker, sidebar widget, secure payouts

### 💻 3. Deployed MVP using Bolt.new
- Prompt inserted into [Bolt.new](https://bolt.new/?rid=dm8ttl)
- Connected to GitHub
- 🚀 Initial deployment:  
  🔗 https://github.com/elky-bachtiar/shop2give/commit/7722dac6114b10392be85f0fd686587252511207

---

## 🧪 Feature Build: Campaign Detail Page

### 🌱 4. Created a Feature Branch
- Branch: `feature/detail-campaign`  
🔗 https://github.com/elky-bachtiar/shop2give/commits/feature/detail-campaign

### ✨ 5. Expanded Prompt with Campaign Seeds

Generated with ChatGPT – Added seed campaigns:
📄 [Read the prompt](./bolt/02_FEATURE_CAMPAIGN_DETAIL_PAGE.md)

- **Lough Swilly Tragedy** (Goal: €40,000)
- **Royal Mission School – Sifra Bachtiar** (Goal: €7,000)
- **Help Gioia (4) Fight Brain Tumor** (Goal: TBD)

Each campaign includes:
- Title, Description, Owner, Goal
- Images and translated text
- Integrated into the Bolt.new build

### 🚀 6. Deployed Updated Version
🔗 https://monumental-gumdrop-e768b3.netlify.app/

---

## 🛍️ 7. Added Product Support

Built a product section into each campaign page:
- Product cards (Image, Name, Price, Donation Value)
- Purchase counts as a donation
- Products include:
  - Gouden Armband - Zon
  - Faith Over Fear Print
  - Cross Bracelet
  - Christian Wall Art

---

## 📤 8. Submitted to Devpost

- Project name: **Shop2Give**
- Final write-up, media, and GitHub repo submitted  
🔗 [View Submission](https://devpost.com/software/shop2give)

---

## 📅 9. Created Daily Journal

Started logging development progress and key learnings in a daily format.  
📄 [Daily Logs](./DEV_JOURNAL_DAILY.md)

---

## 🔀 10. Merged Feature Branch

Merged `feature/detail-campaign` into the `main` branch after successful deployment and testing.  
🔗 [View merge commit](https://github.com/elky-bachtiar/shop2give/commit/<replace-with-merge-sha>)

---

## 🧠 11. Organized Prompts in `./bolt` Directory

Created modular prompt files for easy tracking:
- `./bolt/01_MAIN_PAGE.md`  
- `./bolt/02_FEATURE_CAMPAIGN_DETAIL_PAGE.md`  
- More to come as features are added...

Linked each prompt file in this journal for traceability.

---

## 💳 12. Payment Integration with Stripe

### 🪄 Created New Branch
- Branch: `feature/stripe`  
🔗 [View Branch](https://github.com/elky-bachtiar/shop2give/commits/feature/stripe)

### 🔌 Connected Bolt.new to Stripe
- Used Bolt.new's integration guide to connect to **Stripe API**
- Enabled product checkout → Stripe Payment Links and test mode
- Added basic donation flow via Stripe, with real-time redirect after purchase

### 🌐 Connected to Supabase
- Integrated **Supabase** as the project backend
- Created and configured **Stripe customer webhooks** using **Edge Functions**
- Webhook events handled:
  - `checkout.session.completed` → updates donation records
  - `invoice.paid` → logs donor + updates progress ring
- Edge Functions written in TypeScript using Supabase CLI
- Verified live webhook testing via Stripe CLI

---

📄 Technical note: Stripe environment variables stored securely via `.env` and deployed using Netlify environment settings for backend callbacks.

---

🚀 Day 2: Continue Development
Todo:
- User Roles
  - Platform Owner
    - SUPER ADMIN
  - Platform Manager
    - Can add products
    - Can add campaigns
    - Can add users
    - Can add roles
    - Can add permissions
  - Campaign Manager
    - Can add products
    - Can add users
    - Can add roles
    - Can add permissions
    - Can add campaigns
  - Donor
    - Can donate
    - Can buy products
  - Seller (without campaign)
    - Can sell products
    - Can add products
- MainPage
  - Change button "Start a Shop2Give" in header navigation to Shopping Chart icon.
  - Add flavicon to the website.
  - Change "How to Start a Shop2Give" to a better title.
  - Change to a better logo
- Product
  - Product in Stripe can have a campaign ID.
  - There should be multiple types of products.
    - Product can be added from a campaign.
    - Product added by the platform it self (PLATFORM_MANAGERuser role)
- CampaignDetailPage
  - Make sure button "Add to Donation" is on product work well.
  - If product is added from a campaign, the campaign ID should be added to the product in shopping chart.
- 
## 🙌 What I Learned

- How to iterate prompts for AI-generated web apps
- How to use AI tools like ChatGPT + Bolt.new to rapidly build a complete SaaS
- That mission-driven tech can start with something personal and scale fast
- How to ship, improve, and deliver value during a live hackathon

---

## ✝️ Why This Project Matters

My daughter Sifra chose to follow God and attend Royal Mission School. Inspired by her, I built Shop2Give as a way to support her—and others—through faith-based fundraising that combines purpose and generosity.

> 💡 *What started as one campaign became a platform to empower many.*

---
