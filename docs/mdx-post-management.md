# MDX Post Management System

## Overview

This project now includes automated tools for creating and managing MDX blog posts, making it easier to scaffold new content and track existing posts.

## Commands

### Create New Post
```bash
npm run create-post
```

**What it does:**
- Interactive prompts for post metadata (ID, title, keywords)
- Creates directory structure: `posts/[post-id]/`
- Generates boilerplate files:
  - `metadata.json` - Post metadata with auto-generated date
  - `post.mdx` - MDX template with sections
  - `Thumbnail.tsx` - Tailwind-styled thumbnail component
  - `components/index.ts` - Directory for post-specific components

**Example workflow:**
```
🚀 Creating a new MDX post...

Post ID (kebab-case): my-new-post
Post title: My Amazing New Post
Keywords (comma-separated): react, nextjs, tutorial

✅ Post "My Amazing New Post" created successfully!
📁 Location: /posts/my-new-post
📝 Edit: /posts/my-new-post/post.mdx
🎨 Thumbnail: /posts/my-new-post/Thumbnail.tsx
```

### List All Posts
```bash
npm run list-posts
```

**What it shows:**
- All posts with status indicators:
  - ✅ Complete (has metadata.json, post.mdx, Thumbnail.tsx)
  - ⚠️ Incomplete (missing metadata or files)
  - ❌ Error (invalid metadata.json)
- Post metadata: title, date, keywords
- Asset indicators: 🧩 (has components), 🎨 (has thumbnail)
- Summary statistics

**Example output:**
```
📝 Blog Posts:

✅ next-font
   Title: next/font/google 이슈
   Date: 2023-10-24
   Keywords: next, font, noto sans, korean, 폰트
   Assets: 🎨

📊 Total: 10 posts
✅ Complete: 9
⚠️ Incomplete: 1
❌ Errors: 0
```

## File Structure

Each post follows this structure:
```
posts/
├── [post-id]/
│   ├── metadata.json      # Post metadata
│   ├── post.mdx          # MDX content
│   ├── Thumbnail.tsx     # Post thumbnail component
│   └── components/       # Post-specific components
│       └── index.ts
```

## Templates

### metadata.json
```json
{
  "id": "post-id",
  "title": "Post Title",
  "written": "2025-01-01",
  "keywords": ["tag1", "tag2"]
}
```

### Thumbnail.tsx (uses Tailwind CSS v4)
```tsx
export default function Thumbnail() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-white text-center">
        <h2 className="text-2xl font-bold mb-2">Post Title</h2>
        <p className="text-lg opacity-90">Post thumbnail</p>
      </div>
    </div>
  );
}
```

## Benefits

1. **Consistency** - All posts follow the same structure
2. **Speed** - Quick scaffolding with templates
3. **Oversight** - Easy to track post status and completeness
4. **Tailwind Ready** - New thumbnails use Tailwind CSS v4
5. **Interactive Components** - Built-in support for post-specific components