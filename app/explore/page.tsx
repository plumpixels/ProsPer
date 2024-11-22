import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, ThumbsUp, MessageSquare } from "lucide-react";

const STORIES = [
  {
    id: 1,
    title: "The Last Sunset",
    excerpt:
      "As the crimson sun dipped below the horizon, Sarah knew this would be the last sunset she'd ever see. The world was changing, and with it, everything she had ever known...",
    author: "Elena Martinez",
    category: "Short Story",
    likes: 234,
    comments: 45,
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Whispers in the Wind",
    excerpt:
      "The autumn leaves danced in the breeze, carrying whispers of forgotten memories. Each gust brought with it the scent of change, of possibilities yet unexplored...",
    author: "James Chen",
    category: "Poetry",
    likes: 189,
    comments: 32,
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1507371341162-763b5e419408?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Time Keeper",
    excerpt:
      "In a world where time was currency, Marcus found himself running out of minutes. The clock on his wrist blinked warning signals as he rushed through the crowded streets...",
    author: "Alex Thompson",
    category: "Short Story",
    likes: 312,
    comments: 67,
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExplorePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Explore Stories</h1>
        <p className="text-muted-foreground">
          Discover amazing stories, poems, and essays from talented writers around
          the world.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Label htmlFor="category">Category</Label>
          <Select defaultValue="all">
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="story">Short Stories</SelectItem>
              <SelectItem value="poem">Poetry</SelectItem>
              <SelectItem value="essay">Essays</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="sort">Sort By</Label>
          <Select defaultValue="recent">
            <SelectTrigger id="sort">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="time">Time Range</Label>
          <Select defaultValue="all">
            <SelectTrigger id="time">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="day">Past 24 Hours</SelectItem>
              <SelectItem value="week">Past Week</SelectItem>
              <SelectItem value="month">Past Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {STORIES.map((story) => (
          <Card key={story.id} className="overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${story.image})` }}
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge>{story.category}</Badge>
                <span className="text-sm text-muted-foreground">
                  {story.readTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {story.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{story.author}</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{story.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{story.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}