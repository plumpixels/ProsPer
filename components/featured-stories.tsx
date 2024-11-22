import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

const FEATURED_STORIES = [
  {
    id: 1,
    title: "The Last Sunset",
    excerpt: "As the crimson sun dipped below the horizon, Sarah knew this would be the last sunset she'd ever see...",
    author: "Elena Martinez",
    category: "Short Story",
    readTime: "5 min",
    publishedAt: new Date("2024-03-20"),
  },
  {
    id: 2,
    title: "Whispers in the Wind",
    excerpt: "The autumn leaves danced in the breeze, carrying whispers of forgotten memories...",
    author: "James Chen",
    category: "Poetry",
    readTime: "3 min",
    publishedAt: new Date("2024-03-19"),
  },
  {
    id: 3,
    title: "The Time Keeper",
    excerpt: "In a world where time was currency, Marcus found himself running out of minutes...",
    author: "Alex Thompson",
    category: "Short Story",
    readTime: "7 min",
    publishedAt: new Date("2024-03-18"),
  },
];

export function FeaturedStories() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {FEATURED_STORIES.map((story) => (
        <Card key={story.id} className="overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Badge>{story.category}</Badge>
              <span className="text-sm text-muted-foreground">{story.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              <Link href={`/story/${story.id}`} className="hover:underline">
                {story.title}
              </Link>
            </h3>
            <p className="text-muted-foreground mb-4">{story.excerpt}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{story.author}</span>
              <span className="text-muted-foreground">
                {formatDistanceToNow(story.publishedAt, { addSuffix: true })}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}