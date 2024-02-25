const ms = (time: string) => {
    // Convert time to milliseconds
    // example: 1d -> 24h -> 24 * 60 * 60 * 1000
    // example: 32h -> 32 * 60 * 60 * 1000
    // example: 30m -> 30 * 60 * 1000
    // example: 2w -> 2 * 7 * 24 * 60 * 60 * 1000
    // example: 12w -> 12 * 7 * 24 * 60 * 60 * 1000
    let milliseconds = 0;
    if (time.endsWith('d')) {
        milliseconds = parseInt(time) * 24 * 60 * 60 * 1000;
    }
    else if (time.endsWith('h')) {
        milliseconds = parseInt(time) * 60 * 60 * 1000;
    }
    else if (time.endsWith('m')) {
        milliseconds = parseInt(time) * 60 * 1000;
    }
    else if (time.endsWith('w')) {
        milliseconds = parseInt(time) * 7 * 24 * 60 * 60 * 1000;
    }
    return milliseconds;
}

export default ms