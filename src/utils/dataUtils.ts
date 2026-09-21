import moment from "jalali-moment"
moment.locale("fa-IR")

export type FormatType = 'dddd، jD jMMMM jYYYY' | 'jD jMMMM jYYYY' | 'jMM/jDD' | 'jYYYY/jMM/jD'

export const convertMiladi2Jalali = (data : string | null , format : FormatType = "jD jMMMM jYYYY") => {
    const newDate = moment(data)
    return newDate.format(format)
}