// Meeting time: 30
// Output: [['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']]

const personOne = {
    calendar: [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']],
    boundaries: ['9:00', '20:00']
}

const personTwo = {
    calendar: [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']],
    boundaries: ['10:00', '18:30']
}

const calculate = (personOneConfig, personTwoConfig, meetingTime) => {
    const freeSlots = []
    const personOneFreeSlots = getFreeSlots(personOneConfig, meetingTime)
    const personTwoFreeSlots = getFreeSlots(personTwoConfig, meetingTime)

    console.log(personOneFreeSlots)
    console.log(personTwoFreeSlots)

    // Compare these two results and get free time for both of the users
    // Next check if times are between boundaries
    // Next check if difference between end and start is equal or greater to meeting time

    return []
}

const getFreeSlots = (config, meetingTime) => {
    const { calendar, boundaries } = config
    const freeSlots = []

    for (let i = 0; i < calendar.length; i++) {
        const nextValue = i + 1 < calendar.length ? calendar[i + 1][0] : boundaries[1]
        const comparedTime = compareTimes(calendar[i][1], nextValue, meetingTime)

        if (comparedTime === 1) {
            freeSlots.push([calendar[i][1], nextValue])
        }
    }

    return freeSlots
}

const compareTimes = (timeOne, timeTwo, meetingTime) => {
    const [hours1, minutes1] = timeOne.split(':')
    const [hours2, minutes2] = timeTwo.split(':')

    const time1 = Number(hours1) * 60 + Number(minutes1)
    const time2 = Number(hours2) * 60 + Number(minutes2)

    const timeDiff = time2 - time1

    if (time1 < time2 && timeDiff >= Number(meetingTime)) {
        return 1
    } else if (time1 > time2) {
        return -1
    } else {
        return 0
    }
}

const result = calculate(personOne, personTwo, '30')
console.log(result)
