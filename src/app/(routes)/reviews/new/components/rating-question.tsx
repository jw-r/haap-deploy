interface RatingsProps {
  question: string
  category: string
}

const ratingLevels = [
  { key: 'satisfy', emoji: '😍', text: '매우 만족', value: 5 },
  { key: 'enough', emoji: '☺️', text: '만족', value: 4 },
  { key: 'normal', emoji: '😑', text: '보통', value: 3 },
  { key: 'bad', emoji: '🙁', text: '불만족', value: 2 },
  { key: 'terrible', emoji: '😨', text: '매우 불만족', value: 1 },
]

export default function RatingQuestion({ question, category }: RatingsProps) {
  return (
    <>
      <div>{question}</div>
      <div className="flex justify-between">
        {ratingLevels.map(({ key, emoji, text, value }) => (
          <span key={key}>
            <input
              id={key + category}
              type="radio"
              className="peer hidden"
              name={category}
              value={value}
            />
            <label
              htmlFor={key + category}
              className="inline-block min-w-[60px] rounded border-2 border-background bg-background-secondary p-[4px] text-center grayscale peer-checked:border-point peer-checked:text-point peer-checked:grayscale-0"
            >
              <div className="text-[24px]">{emoji}</div>
              <div className="text-[12px]">{text}</div>
            </label>
          </span>
        ))}
      </div>
    </>
  )
}
