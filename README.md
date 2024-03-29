# Admin CMS Guide

cd vs-project

Start sanity server on `http://localhost:3333`

**npm**

npm run dev

## Updating dynamic content in the Hero section

Select 'heroheader' schema

Select 'HeroHeaderContent' field

Update the field 'InitialText' to change the H1 paragrapgh text "Complete" which preceeds the text Highlighted with color green "Vue.js Training"

Update the field 'HighlightedText' to change the H1 paragraph text "Vue.Js training" which is highlighted with color green and preceeds the text "solutions for companies".

Update the field 'FinalText' to change the H1 paragraph text "solutions for companies" which is colored white.

Update the field 'ButtonText' to change the call to action button text which is initially "Talk to sales".

## Updating lessons, courses and hours element

Select 'coursedetails' schema

Select 'Course Details' field

Update the field 'VideoLessonsAmount' to change the content of "video lessons" element from "763"

Update the field 'CourseAmount' to change the content of "courses" element from "40"

Update the field 'Duration' to change the content of "hours" element from "64"

## Updating bullet points

### Updating Basic Card bullet points

Select 'basicCardContent' schema

Select 'Basic Card Points' field

Update the 'title' array field with the bullet point list in the order of how they will be displayed.

### Updating Professional Card bullet points

Select 'professionalCardContent' schema

Select 'Professional Card Points' field

Update the 'title' array field with the bullet point list in the order of how they will be displayed.

### Updating Basic Ultra Card bullet points

Select 'basicUltraContent' schema

Select 'Ultra Card Points' field

Update the 'title' array field with the bullet point list in the order of how they will be displayed.

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
