const abbreviation = {
  "business,": "biz",
  "educational": "ed·t·nal",
}

const txt_body = document.getElementById('txt_body');
const p_block = document.getElementById('p_block');
const p_txt = document.getElementById('p_txt');
const p_boustrophedon = document.getElementById('p_boustrophedon');

// const txt = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
// // line-length: 93 characters.
// // p_block limit: 93 characters.
// console.log(txt.length)

// If a text length is 93, split it. At every other
// line thou shall transform in boustrophedon.

function transformBoustrophedon(txt) {
  let original_array = txt.split(" ").reverse();

  const result = original_array.join('&#32;');

  const words = result.split("&#32;")
  // const words = original_array
  for(let i = 0; i < words.length; i++) {

    for(let j = 0; j < words[i].length; j++) {
      if ((words[i][j]) == ".") {
        // slice the punctuation and place the same punctuaction at the beginning
        const punctuaction = words[i].slice(0, j)
        // place at the beginning
        words[i] = `.${punctuaction}`
        // console.log(words)
      }
    }

  }

  // console.log(words)

  const resultado = words.join('&#32;');

  return resultado;
}


const text = `
During the past two decades, I have written about and worked with business, government, and educational institutions facing a widening skills-jobs disconnect. The jobs revolution is not going away. It now looms ominously over all Americans and the global economy.

Here are some snapshots from workers and businesses.

Jan is a recent college graduate with a degree in communications. Now, she can’t find a job that matches her education.

Ben dropped out of high school to become a construction worker but was let go in the housing recession. There are few good paying jobs for people like Ben with no skills or little education.

After finishing high school, Cody worked hard for a decade and became an office manager. Then, in 2010, the company went out of business. Though she took some college business courses, Cody finds companies have little interest in hiring her.

For the past 20 years, José has been an IT programmer. Now, he is unemployed but lacks the latest software knowledge to fill current computer positions.

Robert is a production manager at an aerospace facility. His company has back orders for aircraft stretching to the end of the decade. He can’t find additional aerospace technicians to meet increased customer demands or even to replace his baby boomer workers who are retiring. Worse yet, Robert’s parts subcontractors are also having difficulty finding skilled technical workers. These companies are often unable to supply vital components to meet his production needs.

As the client services vice president of a major fund management company, Betty needs to hire large numbers of personal financial advisors. They will assist baby boomers in evaluating distribution plans for their retirement accounts. However, she is experiencing increasing difficulty in recruiting recent college finance graduates. Most candidates seem to lack the oral and written communication skills or personal motivation for conducting counseling sessions with clients.

These snapshots illustrate a gap that has been growing since the 1980s between worker qualifications and the skills employers are seeking. Technology and global business practices have continuously raised the employee knowledge bar for most jobs. Yet the education-to-employment system has remained the same. We have failed to respond to the challenge of creating a larger talent pool of skilled people in our communities.

Also, a major demographic shift is underway. Every day, 10,000 baby boomers are retiring; 70 million will retire between 2010 and 2020. Their technical skills are increasingly found to be in short supply as employers struggle to find replacement workers.

Society has been in denial. If a major economic event doesn’t have a personal impact, most people will not change their cultural outlook. Public opinion will only begin to shift as the majority of people become directly caught up in this unfolding jobs revolution.

But now we have reached an employment tipping point. The broad requirements of the U.S. job market can no longer be supplied simply by maintaining the current failing system. This talent shambles is set to worsen.

The United States and the world are locked into a structural labor market race between advanced technology on one side and demographics and education on the other. Too few Americans are prepared to run in this race. By the end of this decade, many businesses will no longer have the talent they need to sustain themselves.

Around the world, workers and businesses are caught up in a transitional labor market era. The ready availability of skilled talent, not location, is now the primary factor in determining local employment. In this new era, the success or failure of individual businesses and of regional or national economies will largely be determined by their ability to provide more people who can meet labor market requirements with the right skills at the right time.

Instead of the needed systemic overhaul, many leaders in business, government, and education still think they can make the old system well again. “We all think that we know certain things to be true beyond doubt, but these things often then turn out to be false, and until we unlearn them, they get in the way of new understanding,” stated Matt Ridley, author of The Rational Optimist (2011).2

Many still fail to grasp that technological progress is occurring too fast for labor markets and current talent creation systems to meaningfully adjust. These talent problems are structural. They also are systemic. U.S. businesses will make big gains as they find better ways to use new technologies, but only if they relearn the importance of investing in the education and training that workers and students need for this new jobs era.3

Until recently, U.S. businesses have bridged this skills deficit by using the twin talent safety valves of importing educated workers or exporting overseas high-pay/high-skills jobs wherever they could find a skilled talent pool. These talent safety valves are beginning to fail in part because this is also an international jobs–talent issue. The World Economic Forum (2011) predicts that this disconnect will persist for decades and the worst global talent shortages are yet to come.4

The demand for talent and the supply of workers with the desired skills are out of balance all over the world. The populations of Japan, South Korea, and many European nations are in decline. India and China are moving into more sophisticated high-tech manufacturing or IT services. They both are now encountering severe shortages of engineers, scientists, and technicians with the requisite educational preparation due to their deficient public education systems and the inadequate standards of institutions of higher learning.

A major structural change also is occurring in the U.S. labor market. Though the GDP has risen, unemployment has not fallen in a way consistent with the number of jobs openings. Why?

U.S. productivity is increasing. In manufacturing and most other business sectors, it’s not just advanced machines. It’s increasingly evident that many new advanced technologies are digitizing the whole economy.

Past history shows that today’s surge in U.S. productivity will create tomorrow’s jobs and raise living standards. New jobs will come from rising efficiencies in production and innovative technologies spawning new products and services throughout the entire economy.

The flip side to these breakthroughs is that today’s and tomorrow’s jobs require advanced technical skill levels. A workplace may need fewer people, but they must be better educated and able to work with advanced computer systems. This has become the new normal for employment whether it is in an office, production facility, hospital, law firm, or service business.

These digitized jobs present a new problem. The consensus among employers is that people need to be reskilled for the new workplace. The urgent need to create more skilled workers is now a central political and economic concern in communities across America.

A new U.S. job era has arrived. The availability of better educated talent with up-to-date career skills now largely determines where businesses will locate in the United States or anywhere in the world. Those communities that break down the structural barriers between businesses, education, and community groups and that collaborate to renew their talent creation and economic systems will attract new businesses and retain current ones. Those that don’t will wither and die.

The Great Recession has accelerated an ongoing labor market shift that was masked by the many low- or semi-skilled jobs created during the housing/financial bubble. In today’s labor market, employment for low- or semi-skilled workers has fallen dramatically. Even middle-skilled professionals have seen a steady decline in jobs because of automation. In general, the job opportunities are brighter for high-skilled people who have kept their knowledge and applicable certifications up-to-date and who can relocate to where jobs exist.

The American education-to-employment system is largely failing to prepare more people with the required skills to compete in this new labor market era. Laid-off workers often lack the skills to move into jobs in growing sectors of the economy. Businesses and government job training programs are largely inconsistent, short term, or too generic.

As a direct result over this decade, the United States is at real risk of an expanding poverty cycle as talent deficits spread across the entire economy. Systemic change will not be easy. However, holding onto the job-skills status quo portends an economic disaster.

At present, America is unilaterally ceding its global leadership in technology and innovation to other nations. The economic advantages gained from U.S. educational exceptionalism in the 20th century have disappeared. Too many younger workers lack both the general education and specialized career skills, let alone a strong work ethic, to sustain a middle class standard of living. They are now adding to the growing American underclass.

In 2013, over 89 million Americans of working age were not part of the U.S. labor market. The number of people looking for work (labor participation rate) was near the historic low of 63.6 percent, while the average duration of unemployment remained near historic highs. Why are so many Americans sitting on the job sidelines, while over six million jobs are vacant across the United States?

How can we bring these people back into the job market? What can be done locally and regionally to restructure the talent creation system? How can we rebuild the jobs pipeline that connects local businesses to the skilled talent needed to remain competitive and survive?

Future Jobs: Solving the Employment and Skills Crisis offers answers to this jobs and skills disconnect and other pressing employment questions. Its foremost objective is to give people and businesses alike renewed hope for a better future workforce and confidence about meeting the challenges that stand in the way.

Future Jobs explores the concept behind Regional Talent Innovation Networks (RETAINs) and their credibility as a major labor market change engine. RETAINs are community intermediaries. They act as hubs for cross-sector partnerships engaged in a systemic redesign that matches skills and jobs to regional economic development. RETAINs facilitate broader civic engagement by forging links between businesses, educators, community leaders, and ordinary citizens.

Future Jobs presents a problem and solution format in four parts:

Part I: What will be the hot jobs over the next decade? How can individuals find the career areas that best suit them? What are the best ways of preparing for these careers?

Part II: What stands in the way of rebuilding the jobs pipeline? How has our culture blindsided businesses and people from recognizing the necessity for updating the education-to-employment system?

Part III: What makes RETAINs a flexible and powerful employment solution? Where have RETAIN breakthroughs begun to rebuild the talent creation system?

Part IV: How can future business and government policy changes help bring RETAINs to scale across the United States and around the globe? What are future potential scenarios for U.S. job market and the economy?

The U.S. federal and state budgets now face an indefinite period of reduced government resources. Private sector employers will be the main source of job creation and innovation. They will hire people to support innovation and business expansion, but not until they again recognize the tremendous potential of investing in the American workforce.5 We are lagging behind many of our competitors who are more effectively investing in their own workforces, because much of U.S. business culture remains at the mercy of Wall Street’s fixation on short-term profit.

As a result of all these converging issues, we have found ourselves in a profound watershed era of economic change. “We’re at one of those extraordinary moments in history when each of us gets the opportunity to play an important role in not only transitioning to a new world, but also designing it,” stated John L. Petersen, president of the Arlington Institute.6 This requires a renewed level of civic engagement from all of us, as part of a pro-jobs, pro-growth agenda addressing the employment and skills crisis and downplaying short-term profit taking.

This author’s ultimate objective is to help everyone reconsider the choices we will need to make in the journey through the employment crossroads. The time for action is today, before other skilled foreign competitors take away our future.
`

const str = formatting(text)

// cut the str at the 93th character before a whitespace
// const result = str.match(/.{1,93}/gs) ?? [];
const result = str.match(/.{1,93}\s/g) ?? [];



function formatting(text) {
  const words = text.split(" ")

  for (let word of  words) {
    if(abbreviation.hasOwnProperty(word)) words[words.indexOf(word)] = abbreviation[word]
  }

  return words.join(" ")
}


function b(arr) {
  const newArr = arr;
  for(let i = 1; i < newArr.length; i += 2) {
    newArr[i] = '<span class="boustrophedon">' + transformBoustrophedon(newArr[i]) + '</span>';
  }

  return newArr;
}

p_block.innerHTML = b(result).join("<br>");