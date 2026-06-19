---
number: 1
title: "Sleep Duration and Depression Symptoms"
status: "in-progress"
date: 2026-06-19
tags: ["NHANES", "sleep", "depression", "correlation", "SQL", "visualization"]
question: "Do people who sleep less report more depressive symptoms?"
hypothesis: "I genuinely don't know. Conventional wisdom says less sleep worsens mood, but personally I tend to sleep more when I'm feeling down — so this is an honest open question."
dataset: "NHANES 2021–2023 (August): Depression Screener (DPQ) and Sleep Disorders (SLQ)"
---

## Question

Do people who sleep less report more depressive symptoms?

## Initial Hypothesis

I genuinely don't know. Conventional wisdom says less sleep worsens mood, but personally I tend to sleep more when I'm feeling down — so this is an honest open question worth investigating.

## Dataset

NHANES 2021–2023 (August), National Center for Health Statistics.
- **DPQ** — Patient Health Questionnaire (PHQ-9) depression screener
- **SLQ** — Sleep Disorders questionnaire, includes self-reported sleep duration

## Cleaning

*To do: handle missing/refused/don't know values (coded as 7, 9, or 77, 99 in NHANES), drop incomplete rows, validate sleep duration range.*

## Analysis

Correlation analysis between sleep duration (hours per night) and PHQ-9 total score. No predictive model — the goal is to understand the shape of the relationship.

Planned visualization: scatter plot of sleep hours vs. depression score, possibly with a trend line.

## SQL

Join DPQ and SLQ tables on the respondent sequence number (SEQN), filter to valid responses, compute PHQ-9 total score by summing DPQ010 through DPQ090.

## What Surprised Me

*To be filled in after analysis.*

## Limitations

*To be filled in after analysis.*

## Next Investigation

002 — TBD
