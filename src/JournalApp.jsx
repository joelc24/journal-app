import AppRouter from "./routes/AppRouter"
import AppTheme from "./theme/AppTheme"


const JournalApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter/>
      </AppTheme>
    </>
  )
}

export default JournalApp