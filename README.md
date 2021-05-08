# New KRLX Website
This is our new website. It is in [Next.js](https://nextjs.org/), a React framework.

It generates nightly static builds from our Wordpress CMS and Spinitron. It uses wordpress graphql and the [Spinitron API](https://spinitron.github.io/v2api/).

Currently it is hosted on vercel.com



To run locally you most have NPM installed. Check [here](https://www.npmjs.com/get-npm).

Install Dependencies:

`npm install`

Configure local variables

Create `.env.local` file in main directory `cp .env.local.example .env.local` and put in the Spinitron API key [here](https://spinitron.com/station/automation/panel).

```
WORDPRESS_API_URL=https://www.content.krlx.org/graphql
SPINITRON_API_URL=https://spinitron.com/api
SPINITRON_AUTH_KEY=ENTER_SPINITRON_API_KEY_HERE
```

Now launch the development server

`npm run dev`

## Projects
- Update the Board Page
- Live Songs and Current show from spinitron on the site
- Redo the homepage
- Redo the schedule page. Look [here](https://dublab.com/schedule)
- Better incorporate a chat feature
- Add recorded shows to the DJ page
- Work on blog formatting problems
- Projects page. Look [here](https://dublab.com/projects)
- Rebuild [signage.krlx.org](http://signage.krlx.org)
- Make content from wordpress pages and posts all responsive. See recordlibe
