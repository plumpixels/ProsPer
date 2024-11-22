import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Edit2, Settings, User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-start gap-8">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">John Doe</h1>
          <p className="text-muted-foreground mb-4">
            Writer of short stories and poetry. Lover of words and imagination.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">
              <Edit2 className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="stories" className="w-full">
        <TabsList>
          <TabsTrigger value="stories">Stories</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>

        <TabsContent value="stories" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-4">
                <h3 className="font-semibold mb-2">Story Title {i}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A brief excerpt from the story goes here...
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Mar 20, 2024</span>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>123 reads</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="drafts">
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i} className="p-4">
                <h3 className="font-semibold mb-2">Draft {i}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Work in progress...
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last edited 2h ago</span>
                  <Button variant="ghost" size="sm">
                    Continue Writing
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="about">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">About Me</h3>
                <p className="text-muted-foreground">
                  I've been writing stories since I was young. My work focuses on
                  science fiction and fantasy themes, exploring human nature through
                  imaginative scenarios.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  For collaborations and inquiries: john.doe@example.com
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}