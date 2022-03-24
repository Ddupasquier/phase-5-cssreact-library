class BadWords
    BAD_WORDS = ["fuck", "fucking", "fucked", "shit", "pussy", "ass", "retard", "cunt", "motherfucker", "dick", "bastard", "dickhead", "cock", "punani", "gash", "tit", "breast", "breasts", "bellend", "bitch", "asshole"]

    def self.include?(text)
        DISALLOWED.any? {|disallowed| disallowed.match(text)}
    end
end