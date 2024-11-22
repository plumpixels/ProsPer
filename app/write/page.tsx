"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TipTapEditor } from "@/components/editor/tiptap-editor";
import { useState } from "react";

export default function WritePage() {
  const [category, setCategory] = useState("story");

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Write Your Story</h1>
        <p className="text-muted-foreground">
          Share your creativity with the world. Choose a category and start writing.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter the title of your story"
            className="max-w-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="max-w-xs">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="story">Short Story</SelectItem>
              <SelectItem value="poem">Poem</SelectItem>
              <SelectItem value="essay">Essay</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Content</Label>
          <TipTapEditor />
        </div>

        <div className="flex gap-4 pt-4">
          <Button size="lg">Publish</Button>
          <Button size="lg" variant="outline">
            Save Draft
          </Button>
        </div>
      </div>
    </div>
  );
}