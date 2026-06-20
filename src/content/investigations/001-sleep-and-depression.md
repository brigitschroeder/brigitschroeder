---
number: 1
title: "Sleep Duration and Depression Symptoms"
status: "complete"
date: 2026-06-19
tags: ["NHANES", "sleep", "depression", "correlation", "python", "visualization"]
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

The sleep and depression datasets were joined on respondent ID (SEQN), keeping only participants who had answered both questionnaires. This turned out to be all depression screener respondents (6,337) — every person who completed the PHQ-9 had also completed the sleep survey.

NHANES codes refused and "don't know" responses as 7 or 9. These were replaced with missing values (NaN). Rows missing any key variable — sleep duration or any of the nine PHQ-9 questions — were then dropped. The final dataset contains 5,401 participants.

## Analysis

The PHQ-9 total score was calculated as the sum of the nine depression screener questions (DPQ010–DPQ090), each scored 0–3, for a possible range of 0–27.

Because PHQ-9 scores are heavily right-skewed (most respondents cluster near zero), Spearman correlation was used in addition to Pearson. Spearman makes no assumptions about distribution shape and is more appropriate for ordinal data. Both are reported here for comparison.

| Method | r | p-value |
|--------|-------|---------|
| Pearson | −0.058 | <0.0001 |
| Spearman | −0.043 | 0.0016 |

Both coefficients are negative, indicating that longer sleep is associated with slightly lower depression scores. However, both fall below 0.10 — the threshold for a negligible effect. The small p-values reflect the large sample size (n=5,401), not the strength of the relationship. Statistical significance and practical significance are not the same thing.

![Scatter plot of sleep duration vs. PHQ-9 score with trend line](/images/001-sleep-scatter.png)

## What Surprised Me

I expected a weak correlation, partly because my own experience runs counter to the conventional wisdom — I tend to sleep *more* when I'm feeling down, not less. But I didn't expect the relationship to be this close to nonexistent.

What the scatter plot makes clear is that both short and long sleepers report severe depression symptoms. People scoring 20+ on the PHQ-9 appear at every sleep duration from 4 to 10+ hours. The trend line is nearly flat. Sleep duration, on its own, tells you almost nothing about a person's depression score.

## Limitations

This analysis only tested for a linear relationship between two variables. The relationship between sleep and mood may be non-linear — both very short and very long sleep could be associated with worse symptoms, which would pull a linear correlation coefficient toward zero. The scatter plot hints at this, but a different analysis would be needed to test it.

Several unmeasured variables could be more predictive of either outcome. Age is likely a better predictor of sleep duration. Sleep quality (whether a person feels rested) is probably a stronger predictor of depressive symptoms than duration alone.

## Next Investigation

002 — TBD
