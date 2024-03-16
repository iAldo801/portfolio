import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export default function Services() {

    return (
        <div className="grid grid-cols-3 gap-1 py-4">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Web Development
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="w-64">
                        I can help you build a website
                        for your business, personal
                        portfolio, or anything else you
                        may need a website for.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>
                        Bot Development
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="w-64">
                        I can help you build a discord
                        bot for your server, or a
                        custom bot for your business.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>
                        Other Services
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="w-64">
                        If you have a project that
                        doesn't fit into the above
                        categories, feel free to reach out
                        to me and ill see if I can help you out!
                        If I can't, I'll try to refer you to someone who can!
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}