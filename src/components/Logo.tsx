interface LogoProps {
  className?: string
  showText?: boolean
  iconSize?: number
}

export function Logo({ className = '', showText = true, iconSize = 36 }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/images/plugzzy-logo.png"
        alt="Plugzzy"
        width={iconSize}
        height={iconSize}
        className="shrink-0 object-contain"
      />
      {showText && (
        <span className="text-xl font-bold tracking-tight text-plugzzy-900">
          Plugzzy
        </span>
      )}
    </div>
  )
}
