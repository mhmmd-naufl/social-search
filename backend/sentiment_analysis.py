from textblob import TextBlob

def analyze_comments(comments):
    result = []
    for text in comments:
        polarity = TextBlob(text).sentiment.polarity
        if polarity > 0:
            label = "positif"
        elif polarity < 0:
            label = "negatif"
        else:
            label = "netral"
        result.append({"komentar": text, "sentimen": label})
    return result
