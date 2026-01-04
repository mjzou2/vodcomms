export default function SessionDetails({ session }) {
  if (!session) return null

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Selected</p>
          <h2>Session details</h2>
        </div>
      </div>

      <div className="stack">
        <div><strong>Title:</strong> {session.title}</div>

        <div>
          <strong>YouTube:</strong>{' '}
          {session.youtube_url ? (
            <a href={session.youtube_url} target="_blank" rel="noreferrer">
              {session.youtube_url}
            </a>
          ) : (
            <span>—</span>
          )}
        </div>

        <div>
          <strong>Media path:</strong> {session.media_path || '—'}
        </div>

        <div>
          <strong>Audio path:</strong> {session.audio_path || '(not generated yet)'}
        </div>
      </div>
    </div>
  )
}
