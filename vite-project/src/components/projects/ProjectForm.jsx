import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Save } from "lucide-react";

const ALL_TAGS = ["Cybersecurity", "AI", "Game Dev", "Web", "Mobile", "Blockchain"];


export default function ProjectForm({ category, onSave, onCancel, isLoading, theme }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    date: new Date().toISOString().split("T")[0],
    github_url: "",
    tags: [],
    category: category,
  });

  const [errors, setErrors] = useState({});

  const toggleTag = (tag) => {
    const currentTags = formData.tags || [];
    const newTags = currentTags.includes(tag)
      ? currentTags.filter((t) => t !== tag)
      : [...currentTags, tag];
    setFormData({ ...formData, tags: newTags });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSave(formData);
  };

  const isDark = theme === "dark";

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="mb-12">
      <div
        className={`rounded-xl p-6 glow-purple transition-all duration-500 ${
          isDark ? "bg-gray-900/80 border border-purple-500/30" : "bg-white border border-purple-300/50"
        } backdrop-blur-sm`}
      >
        <h3 className={`text-xl font-semibold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
          Add New Project
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <Input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Project title *"
              className={`transition-colors ${
                errors.title
                  ? "border-red-500"
                  : isDark
                  ? "bg-black/50 border-purple-500/30 text-white"
                  : "bg-gray-50 border-purple-300 text-gray-900"
              }`}
            />
            {errors.title && (
              <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-sm mt-1">
                {errors.title}
              </motion.p>
            )}
          </div>

          {/* Description */}
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Project description"
            className={`h-24 ${isDark ? "bg-black/50 border-purple-500/30 text-white" : "bg-gray-50 border-purple-300 text-gray-900"}`}
          />

          {/* Image URL */}
          <Input
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            placeholder="Image URL (optional)  ##############################"
            className={isDark ? "bg-black/50 border-purple-500/30 text-white" : "bg-gray-50 border-purple-300 text-gray-900"}
          />

          {/* Date */}
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className={isDark ? "bg-black/50 border-purple-500/30 text-white" : "bg-gray-50 border-purple-300 text-gray-900"}
          />

          {/* GitHub URL */}
          <Input
            value={formData.github_url}
            onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
            placeholder="GitHub URL (optional)  ##############################"
            className={isDark ? "bg-black/50 border-purple-500/30 text-white" : "bg-gray-50 border-purple-300 text-gray-900"}
          />

          {/* Tags */}
          <div className="space-y-2">
            <label className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Select tags (optional)</label>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map((tag) => (
                <Badge
                  key={tag}
                  variant={formData.tags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    formData.tags.includes(tag)
                      ? "gradient-purple text-white"
                      : isDark
                      ? "border-purple-500/30 text-gray-300 hover:border-purple-400"
                      : "border-purple-300 text-gray-700 hover:border-purple-500"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button type="submit" className="gradient-purple flex-1" disabled={isLoading}>
              {isLoading ? (
                "Saving..."
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Project
                </>
              )}
            </Button>
            <Button
              type="button"
              onClick={onCancel}
              variant="outline"
              className={isDark ? "border-gray-600 text-gray-300" : "border-gray-400 text-gray-700"}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
