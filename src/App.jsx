import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function App() {

  return (
    <Alert className='bg-red-500 text-slate-50'>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
