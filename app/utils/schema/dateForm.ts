import * as v from "valibot"

export const schema = v.object({
  moodSpectrum: v.pipe(v.string(), v.nonEmpty("Please enter your mood today.")),
  place: v.pipe(v.string(), v.nonEmpty("Please enter where you want to go.")),
  foodEstablishment: v.pipe(v.string(), v.nonEmpty("Please enter where you want to eat.")),
  meetingTime:  v.pipe(v.string(), v.nonEmpty("Please enter what time you prefer.")),
})

export type DateSchema = v.InferOutput<typeof schema>

