export interface IExample {
  scenario: string;
  input: string;
  output: string;
}

export const exampleData: IExample[] = [
  {
    scenario: `a team lead, you have to terminate the employment of your subordinate.`,
    input: `You are fired because the company has financial challenge.`,
    output: `Given the current financial challenges the company is facing, I regret to inform you that your role has been impacted and your employment is terminated.`
  },
  {
    scenario: `an employee, you feel unfair to work more than your job scope without more compensation.`,
    input: `If you expect me to do the job of 3 people then I expect you to pay me the salary of 3 people.`,
    output: `My role has evolved to encompass the responsibilities of 3 people. Can we discuss the salary adjustments that would be appropriate to reflect this?`
  },
  {
    scenario: `an interviewee, you want to ask if the manager of this role a micromanager.`,
    input: `Is the manager of this role a micromanager?`,
    output: `Can you provide me with insight into the managerial style of this role? Do they generally provide high levels of autonomy or are there more frequent check-ins?`
  },
  {
    scenario: `an employee who prefers to work from home than going back to office after pandemic.`,
    input: `Why can’t we work remotely when we can perform efficiently?`,
    output: `Could you please provide more information on why we are required to be in the office when I am able to complete my tasks productively from home?`
  },
  {
    scenario: `a senior programmer, you want to instruct your junior to seek answer on his/her own before asking you.`,
    input: `Can you try Google the answer before asking me? Don’t rely on me to spoonfeed you.`,
    output: `To be more efficient, I recommend researching the answer prior to looping me in. This can help provide a quicker resolution and allow me to focus on other tasks.`
  },
  {
    scenario: `feeling uncomfortable to a “joke” at work.`,
    input: `I don’t think this “joke” is funny, it is quite offensive and sexist.`,
    output: `I understand that this joke may have been made with the intent to be funny, however it is quite offensive and sexist. I would kindly ask that any jokes like this be refrained from in the future.`
  },
  {
    scenario: `blamed by a co-worker who doesn’t communicate the expectation clearly.`,
    input: `I'm not a mind reader. How was I supposed to know that?`,
    output: `I appreciate the need of clarity and communication. Could you please provide more details so I have a better understanding of the situation?`
  },
  {
    scenario: `customer support and dealing with a difficult client who is unreasonable.`,
    input: `This refund request is unreasonable. If you are unsatisfied with the product, how could you use it for 3 months before asking for a refund?`,
    output: `I understand your dissatisfaction, however requesting a refund after using the product for 3 months is not within our standard return policy.`
  },
  {
    scenario: `negotiating a job offer and the recruiter is giving you a low-ball.`,
    input: `This offer is way below the market rate. I am asking for 150k annual salary with full insurance and 18 days PTO.`,
    output: `While I understand the offer, I am respectfully requesting a salary of 150k with full insurance and 18 days of paid time off to align with industry standards.`
  },
  {
    scenario: `facing a colleague who takes your credit at work.`,
    input: `If you're going to present my work at least give me credit for it.`,
    output: `It would be appreciated if I could receive credit for the work that I have completed. Is there a way to make that happen?`
  }
];

export function randomize(max: number) {
  return Math.floor(Math.random() * max);
}

export const exampleSwitchInterval = 10000;
