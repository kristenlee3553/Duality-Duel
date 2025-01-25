// Returns the persona prompt with the choices the user chose in the prompt
export function GetPersonaPrompt(choices) {
    const prompt = "Please create a persona using the following information: I am a traveller, " +
    "arriving from distant lands with a trusted companion. I pass by a village when I hear a cry for help. " +
    "The village is under attack by bandits! I decide to " + choices[0] +
    "I then encounter a dying king who asks us to take a sacred relic to a distant temple to ensure peace for his people. " +
    "However, I learned that the king’s reign was marked by cruelty and injustice. I  " + choices[1] +
    "After, we travelled into the woods, when a hooded figure jumps out of the shadows and offers to reveal a " +
    "prophecy about your future. However, the figure warns that the prophecy might be cryptic or difficult to interpret. " +
    "I " + choices[2] + "I then discover a cursed relic in a cave that promises great power, but comes with a dark curse that could " +
    "harm you or others. I " + choices[3] + "After emerging from the cave, I realize my trusted companion has betrayed me. " +
    "I find and confront them at the next village, and they beg for your forgiveness, claiming they had no choice. I " + choices[4]

    return prompt
}

export function GetShadowPrompt() {
    const prompt = "imagine the shadow self confronting the persona self, what are 3 things the shadow would say to the self, " +
    "can you format it into an array, Just an array, no opening text"
    return prompt;
}