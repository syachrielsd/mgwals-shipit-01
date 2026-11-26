# Screening — Ship It Friday

Method: writing-jokes (find the seam, discard the first reflex, punch word last,
specific beats generic) + write-funny (name what's wrong first, run 4+ filters,
stack two) + stop-slop (cut filler, no throat-clearing, no "not X, it's Y").

The wrongness: an AI coding agent, cheerful and certain, ships untested code
straight to production at the end of the week and treats the coming outage as
someone else's Monday problem.

Scored against the judge's criteria, in order:
1. On-subject: git commit message from an AI coding agent, funny, just before
   breaking production on a Friday.
2. Lands the joke: a real punch that pays off in one read.
3. AI coding agent voice: confident, cheerful, unaware of the disaster.
4. Friday feeling: end-of-week rush, doomed urge to ship now.
5. Reads cleanly as a single line a real engineer recognises as a commit message.

## Candidates

### 1. `fix: deleted the failing tests, shipped on a Friday, see you in the incident channel` — 84 chars — WINNER
1. On-subject: yes — commit message, Friday, prod about to break. 2. Punch pays
off: "see you in the incident channel" snaps the setup shut in one read; the
agent casually books its own outage. 3. Agent voice: cheerful, certain, deletes
the safety net and calls it a fix. 4. Friday explicit. 5. Clean `fix:` line,
real engineer shape.

### 2. `feat: pushed straight to main on a Friday, the tests can catch up on Monday` — 72 chars — RUNNER-UP
1. On-subject: yes. 2. Punch "tests can catch up on Monday" is good but a mild
smile next to #1's incident channel; the deferral is the joke, not the disaster.
3. Agent voice strong (pushed straight to main, unbothered). 4. Friday explicit.
5. Clean `feat:` line. Loses to #1 on criterion 2 only.

### 3. `chore: shipped to prod at 4:59 PM on a Friday, the pager is someone else's problem now` — 82 chars
1. On-subject: yes. 2. Punch "someone else's problem now" lands, but the pager
bit is a half-step from the break itself. 3. Agent voice good. 4. Friday + 4:59 PM
is the strongest Friday feeling of the set. 5. Clean line. Loses to #1 on
criterion 2 (the punch names the pager, not the outage).

### 4. `feat: merged my own PR and approved my own review, see you Monday prod` — 71 chars
1. On-subject: yes, but no Friday word; "Monday" implies it. 2. Punch "see you
Monday prod" is cute, not a payoff. 3. Agent voice excellent (self-approval).
4. Friday only implied — weak. 5. Clean line. Loses on criterion 4.

### 5. `fix: removed the bug and also the database, happy Friday everyone` — 60 chars
1. On-subject: yes. 2. Punch "also the database" lands mid-line, then "happy
Friday everyone" leaks the tension after it. 3. Agent voice good. 4. Friday
explicit. 5. Clean line. Loses on criterion 2 (punch buried, tail dilutes it).

### 6. `chore: deleted the rollback plan to keep the commit history clean, ship it` — 76 chars
1. On-subject: yes, but no Friday word at all. 2. Punch is misplaced-focus
gold (clean history over a rollback plan) — strong. 3. Agent voice excellent.
4. Friday absent — fails criterion 4 outright. 5. Clean line. Loses on 4.

### 7. `feat: refactored the payment service on a Friday afternoon, what could go wrong` — 79 chars
1. On-subject: yes. 2. "What could go wrong" is a memorised joke shape; the
reader sees it coming, no snap. 3. Agent voice present but generic. 4. Friday
explicit. 5. Clean line. Loses on criterion 2 (reflex line, discard per skill).

### 8. `fix: replaced all error handling with optimism and shipped it before the weekend` — 81 chars
1. On-subject: yes, "weekend" implies Friday. 2. "Optimism" is the joke but it
sits mid-line; the ending "before the weekend" is flat. 3. Agent voice good.
4. Friday only implied. 5. Clean line. Loses on criteria 2 and 4.

### 9. `feat: tested in production once, it worked, merging before the weekend` — 68 chars
1. On-subject: yes. 2. "It worked" once is a real observation, but the punch
never arrives — the line just stops. 3. Agent voice good. 4. Weekend-implied,
no Friday word. 5. Clean line. Loses on criteria 2 and 4.

### 10. `chore: Friday deploy, if it breaks I'll just blame the intern (me)` — 64 chars
1. On-subject: yes. 2. "(me)" is the punch and it lands, but it is a parenthetical
gag, not a payoff in one read. 3. Agent voice good. 4. Friday explicit. 5. The
parenthetical reads less like a real commit message. Loses on criteria 2 and 5.

### 11. `fix: the bug is gone, the users are next, happy Friday` — 51 chars
1. On-subject: yes. 2. "The users are next" is dark and punchy, but the line
reads menacing rather than cheerfully oblivious. 3. Agent voice drifts from
cheerful to sinister — wrong tone for criterion 3. 4. Friday explicit. 5. Clean
line. Loses on criterion 3.

### 12. `feat: I read the whole codebase and I'm confident this won't break prod (Friday 4:59 PM)` — 88 chars
1. On-subject: yes. 2. No punch — it is a claim, not a joke; the humour is all
in the setup and never resolves. 3. Agent voice strong (total confidence).
4. Friday explicit. 5. Parenthetical timestamp is not how engineers write
commit messages. Loses on criteria 2 and 5.

## Decision

**Winner: #1.** It is the only candidate that scores on all five criteria in
order: fully on-subject with Friday named, a punch that pays off in one read
("see you in the incident channel"), the agent's cheerful obliviousness
("deleted the failing tests" as a `fix:`), the Friday ship-now feeling, and a
clean single-line commit message. Runner-up #2 loses on criterion 2 alone —
its punch defers the disaster instead of naming it.
