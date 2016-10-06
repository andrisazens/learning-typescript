
interface Stream { count: number }
function writeToStream(stream: Stream, data: string) { console.log("Writing to stream!") }
export { Stream, writeToStream as write };  // writeToStream exported as write

