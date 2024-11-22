import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, PenLine, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { FeaturedStories } from '@/components/featured-stories';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Connecting Pieces
        </h1>
        <p className="text-xl text-muted-foreground max-w-[750px] mx-auto">
          Welcome to ProsePer, where every story finds its audience and every writer finds their voice.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/write">
              <PenLine className="mr-2 h-4 w-4" />
              Start Writing
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/explore">
              <BookOpen className="mr-2 h-4 w-4" />
              Explore Stories
            </Link>
          </Button>
        </div>
      </section>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="stories">Stories</TabsTrigger>
          <TabsTrigger value="poems">Poems</TabsTrigger>
        </TabsList>
        <TabsContent value="featured">
          <FeaturedStories />
        </TabsContent>
        <TabsContent value="stories">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Story cards will be populated here */}
          </div>
        </TabsContent>
        <TabsContent value="poems">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Poem cards will be populated here */}
          </div>
        </TabsContent>
      </Tabs>

      <section className="grid gap-8 md:grid-cols-3 text-center">
        <Card className="p-6">
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Read Stories</h3>
          <p className="text-muted-foreground">
            Discover unique voices and perspectives from writers worldwide.
          </p>
        </Card>
        <Card className="p-6">
          <PenLine className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Write & Share</h3>
          <p className="text-muted-foreground">
            Share your stories with a community that appreciates authentic voices.
          </p>
        </Card>
        <Card className="p-6">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <p className="text-muted-foreground">
            Join a community where stories bridge gaps and connect hearts.
          </p>
        </Card>
      </section>
    </div>
  );
}