import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


export default function App() {

  return (
    <Alert variant="primary">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
