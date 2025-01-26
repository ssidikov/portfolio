import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 bg-card">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-lg text-primary mb-2">Get in Touch</h2>
        <h3 className="text-3xl font-bold mb-4 text-card-foreground">Contact me</h3>
        <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <form className="max-w-2xl mx-auto grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">First name</label>
            <Input placeholder="Enter your first name" className="bg-background" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Last name</label>
            <Input placeholder="Enter your last name" className="bg-background" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Email</label>
            <Input type="email" placeholder="Enter your email" className="bg-background" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Phone number</label>
            <Input type="tel" placeholder="Enter your phone number" className="bg-background" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground">Choose a topic</label>
          <Select>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="support">Technical Support</SelectItem>
              <SelectItem value="billing">Billing Question</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground">Message</label>
          <Textarea placeholder="Type your message..." className="min-h-[150px] bg-background" />
        </div>
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-indigo-600">
          Submit
        </Button>
      </form>
    </section>
  )
}

