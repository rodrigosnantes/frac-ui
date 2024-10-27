import {
  Badge,
  BadgeSuccess,
  BadgeError,
  BadgeInfo,
  BadgeWarning
} from "@/components/ui/badge"

export default function App() {

  return (
    <div className="flex justify-center mt-10">
      <div className="w-96">
        <Badge variant="secondary">default</Badge>
        <BadgeSuccess variant="secondary">Success</BadgeSuccess>
        <BadgeError variant="secondary">Error</BadgeError>
        <BadgeInfo variant="secondary">Info</BadgeInfo>
        <BadgeWarning variant="secondary">Warning</BadgeWarning>
      </div>
    </div>
  )
}
