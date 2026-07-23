const fs = require('fs');
const path = require('path');

const levels = [];
const round = (n) => Number(n.toFixed(6));
const signedTerm = (value) => value >= 0 ? `+${value}` : `-${-value}`;
const shiftedVariable = (variable, value) => value >= 0 ? `${variable}-${value}` : `${variable}+${-value}`;

function makeLevel(grade, zhName, enName) {
  const questions = [];
  const add = (knowledge, zh, en, answer) => {
    questions.push({
      id: `hm${grade}_${String(questions.length + 1).padStart(2, '0')}`,
      type: 'number',
      question: { zh, en },
      answer: round(answer),
      knowledge,
      difficulty: grade
    });
  };
  return { questions, add, finish() {
    if (questions.length !== 50) throw new Error(`Grade ${grade}: ${questions.length} questions`);
    levels.push({ id: String(grade), name: { zh: zhName, en: enName }, questions });
  }};
}

// Grade 1: challenge-level number sense, patterns, and two-step stories within 100.
{
  const { add, finish } = makeLevel(1, '一年级 · 无双', 'Grade 1 · Hard');
  for (let i=0;i<10;i++) { const a=18+i*3,b=7+(i%4)*2,c=5+(i%3); add('multi-step addition',`${a} + ${b} - ${c} = ?`,`${a} + ${b} - ${c} = ?`,a+b-c); }
  for (let i=0;i<10;i++) { const total=45+i*4,left=9+(i%5)*3; add('missing number',`□ + ${left} = ${total}，□ = ?`,`□ + ${left} = ${total}. What is □?`,total-left); }
  for (let i=0;i<10;i++) { const first=3+i,step=3+(i%4),pos=6+(i%3); add('number pattern',`数列从 ${first} 开始，每次增加 ${step}，第 ${pos} 个数是多少？`,`A sequence starts at ${first} and increases by ${step}. What is term ${pos}?`,first+(pos-1)*step); }
  for (let i=0;i<10;i++) { const red=12+i*2,blue=7+(i%4),give=3+(i%3); add('two-step word problem',`盒中有 ${red} 个红球和 ${blue} 个蓝球，取走 ${give} 个球后还剩多少个？`,`A box has ${red} red balls and ${blue} blue balls. After ${give} balls are removed, how many remain?`,red+blue-give); }
  for (let i=0;i<10;i++) { const pairs=5+i,extra=i%3; add('counting and grouping',`${pairs} 对袜子和 ${extra} 只单独的袜子一共有多少只袜子？`,`How many socks are in ${pairs} pairs plus ${extra} single socks?`,pairs*2+extra); }
  finish();
}

// Grade 2
{
  const { add, finish } = makeLevel(2, '二年级 · 无双', 'Grade 2 · Hard');
  for(let i=0;i<10;i++){const a=126+i*17,b=58+i*9,c=37+(i%5)*6;add('mixed arithmetic',`${a} - ${b} + ${c} = ?`,`${a} - ${b} + ${c} = ?`,a-b+c);}
  for(let i=0;i<10;i++){const groups=7+i,size=4+(i%6),extra=2+(i%3);add('multiplication word problem',`${groups} 个篮子各有 ${size} 个橙子，另有 ${extra} 个，一共有多少个？`,`${groups} baskets hold ${size} oranges each, with ${extra} extra. How many oranges altogether?`,groups*size+extra);}
  for(let i=0;i<10;i++){const q=6+i,r=1+(i%4),d=5+(i%5);const n=q*d+r;add('division with remainder',`${n} 个物品每 ${d} 个装一盒，装满后剩几个？`,`${n} objects are packed ${d} per box. How many are left over?`,r);}
  for(let i=0;i<10;i++){const h=7+(i%5),m=15+i*4,d=28+(i%4)*7;const total=h*60+m+d;add('time',`现在是 ${h}:${String(m).padStart(2,'0')}，${d} 分钟后是几点中的“分钟数”？`,`It is ${h}:${String(m).padStart(2,'0')}. What is the minute part of the time ${d} minutes later?`,total%60);}
  for(let i=0;i<10;i++){const start=4+i,step=4+(i%5),term=7+(i%3);add('arithmetic pattern',`按规律 ${start}, ${start+step}, ${start+2*step}, …，第 ${term} 个数是？`,`In the pattern ${start}, ${start+step}, ${start+2*step}, …, what is term ${term}?`,start+(term-1)*step);}
  finish();
}

// Grade 3
{
  const { add, finish } = makeLevel(3, '三年级 · 无双', 'Grade 3 · Hard');
  for(let i=0;i<10;i++){const a=24+i*3,b=7+(i%5),c=35+i*4;add('order of operations',`${a} × ${b} - ${c} = ?`,`${a} × ${b} - ${c} = ?`,a*b-c);}
  for(let i=0;i<10;i++){const d=6+(i%5),q=14+i,r=1+(i%(d-1));const n=d*q+r;add('division and remainder',`${n} ÷ ${d} 的余数是多少？`,`What is the remainder when ${n} is divided by ${d}?`,r);}
  for(let i=0;i<10;i++){const l=12+i,w=7+(i%6),cut=2+(i%3);add('area',`长方形长 ${l} cm、宽 ${w} cm，沿宽切去一个长 ${cut} cm 的小长方形，剩余面积是多少 cm²？`,`A ${l} cm by ${w} cm rectangle has a ${cut} cm by ${w} cm strip removed. What area remains in cm²?`,(l-cut)*w);}
  for(let i=0;i<10;i++){const n=24+i*6,num=1+(i%4),den=2+(i%3);const adjusted=n-(n%den);add('fraction of a quantity',`${adjusted} 的 ${num}/${den} 是多少？`,`What is ${num}/${den} of ${adjusted}?`,adjusted*num/den);}
  for(let i=0;i<10;i++){const rows=6+i,cols=5+(i%5),removed=4+(i%4);add('array word problem',`方阵模型有 ${rows} 行，每行 ${cols} 个点，擦去 ${removed} 个后剩多少个？`,`An array has ${rows} rows of ${cols} dots. How many remain after ${removed} are erased?`,rows*cols-removed);}
  finish();
}

// Grade 4
{
  const { add, finish } = makeLevel(4, '四年级 · 无双', 'Grade 4 · Hard');
  for(let i=0;i<10;i++){const a=125+i*37,b=18+(i%7),c=9+(i%5);add('order of operations',`${a} + ${b} × ${c} = ?`,`${a} + ${b} × ${c} = ?`,a+b*c);}
  for(let i=0;i<10;i++){const d=12+(i%5)*3,q=21+i,r=2+(i%7);const n=d*q+r;add('division with remainder',`${n} ÷ ${d} 的余数是多少？`,`What is the remainder when ${n} is divided by ${d}?`,r);}
  for(let i=0;i<10;i++){const whole=40+i*8,a=1+(i%3),b=4;add('fractions',`一条长 ${whole} m 的绳子先用去 ${a}/${b}，再用去剩下的 1/2，还剩多少米？`,`A ${whole} m rope has ${a}/${b} used, then half of the remainder used. How many metres remain?`,whole*(1-a/b)/2);}
  for(let i=0;i<10;i++){const l=18+i,w=9+(i%5),inset=2+(i%3);add('composite area',`长方形长 ${l}、宽 ${w}，切去一个边长 ${inset} 的正方形，剩余面积是多少？`,`A ${l} by ${w} rectangle has a square of side ${inset} removed. What area remains?`,l*w-inset*inset);}
  for(let i=0;i<10;i++){const x=12+i*3,m=4+(i%5),b=17+i;const total=x*m+b;add('inverse operations',`某数乘 ${m} 再加 ${b} 得 ${total}，这个数是多少？`,`A number is multiplied by ${m}, then ${b} is added to get ${total}. What is the number?`,x);}
  finish();
}

// Grade 5
{
  const { add, finish } = makeLevel(5, '五年级 · 无双', 'Grade 5 · Hard');
  for(let i=0;i<10;i++){const a=12.5+i*1.25,b=2.4+(i%5)*0.2,c=3.75+i*0.25;add('decimal operations',`${a} × ${b} - ${c} = ?`,`${a} × ${b} - ${c} = ?`,a*b-c);}
  for(let i=0;i<10;i++){const total=120+i*20,p=15+(i%5)*5,used=18+i*2;add('percentage word problem',`${total} 的 ${p}% 减去 ${used} 等于多少？`,`What is ${p}% of ${total}, minus ${used}?`,total*p/100-used);}
  for(let i=0;i<10;i++){const den=5+(i%4),a=1+(i%3),b=1+((i+1)%3);add('fraction operations',`${a}/${den} + ${b}/${den} 等于多少？请输入小数。`,`What is ${a}/${den} + ${b}/${den}? Enter a decimal.`,(a+b)/den);}
  for(let i=0;i<10;i++){const l=8+i,w=5+(i%4),h=3+(i%5),cut=2+(i%2);add('volume',`长方体长 ${l}、宽 ${w}、高 ${h}，挖去一个棱长 ${cut} 的正方体，剩余体积是多少？`,`A ${l} by ${w} by ${h} prism has a cube of side ${cut} removed. What volume remains?`,l*w*h-cut**3);}
  for(let i=0;i<10;i++){const speed=42+i*3,time=2.5+(i%4)*0.5,rest=12+i;add('rate',`汽车以 ${speed} km/h 行驶 ${time} 小时，再行驶 ${rest} km，共行驶多少 km？`,`A car travels at ${speed} km/h for ${time} hours, then another ${rest} km. What is the total distance?`,speed*time+rest);}
  finish();
}

// Grade 6
{
  const { add, finish } = makeLevel(6, '六年级 · 无双', 'Grade 6 · Hard');
  for(let i=0;i<10;i++){const x=18+i*2,a=3+(i%5),b=7+i,c=a*x-b;add('linear equation',`解方程：${a}x - ${b} = ${c}，x = ?`,`Solve ${a}x - ${b} = ${c}. x = ?`,x);}
  for(let i=0;i<10;i++){const base=160+i*40,p=12.5+(i%4)*2.5,inc=20+i;add('percentage',`${base} 增加 ${p}% 后再减去 ${inc}，结果是多少？`,`${base} is increased by ${p}% and then ${inc} is subtracted. What is the result?`,base*(1+p/100)-inc);}
  for(let i=0;i<10;i++){const unit=7+i,a=2+(i%4),b=3+(i%5);add('ratio',`甲乙数量比为 ${a}:${b}，两者共有 ${(a+b)*unit}，甲有多少？`,`Two quantities are in ratio ${a}:${b} and total ${(a+b)*unit}. What is the first quantity?`,a*unit);}
  for(let i=0;i<10;i++){const r=4+i,angle=90+(i%3)*30;add('circle sector',`半径为 ${r} 的圆中，圆心角 ${angle}° 的扇形面积是多少？取 π=3.14。`,`What is the area of a ${angle}° sector in a circle of radius ${r}? Use π=3.14.`,3.14*r*r*angle/360);}
  for(let i=0;i<10;i++){const upstream=12+i,stream=3+(i%4),hours=2+(i%3);add('rate and current',`船在静水速度 ${upstream} km/h，水速 ${stream} km/h，顺流 ${hours} 小时行多少 km？`,`A boat moves at ${upstream} km/h in still water; current is ${stream} km/h. How far downstream in ${hours} hours?`,(upstream+stream)*hours);}
  finish();
}

// Grade 7
{
  const { add, finish } = makeLevel(7, '七年级 · 无双', 'Grade 7 · Hard');
  for(let i=0;i<10;i++){const a=-18-i*3,b=7+(i%5),c=-4-(i%4);add('rational arithmetic',`${a} - (${b}) × (${c}) = ?`,`${a} - (${b}) × (${c}) = ?`,a-b*c);}
  for(let i=0;i<10;i++){const x=8+i,a=2+(i%4),b=3+(i%5),rhs=a*(x+b);add('linear equation',`解方程：${a}(x + ${b}) = ${rhs}，x = ?`,`Solve ${a}(x + ${b}) = ${rhs}. x = ?`,x);}
  for(let i=0;i<10;i++){const x=-3+i,m=2+(i%5),b=11-i;add('linear function',`函数 y = ${m}x + ${b}，当 x = ${x} 时，y = ?`,`For y = ${m}x + ${b}, find y when x = ${x}.`,m*x+b);}
  for(let i=0;i<10;i++){const base=12+i*2,height=7+(i%5),cut=3+(i%3);add('composite geometry',`三角形底 ${base}、高 ${height}，减去边长 ${cut} 的正方形面积，结果是多少？`,`A triangle has base ${base} and height ${height}. Subtract the area of a square of side ${cut}. What remains?`,base*height/2-cut*cut);}
  for(let i=0;i<10;i++){const total=30+i*5,good=6+(i%7);add('probability',`袋中有 ${total} 个球，其中 ${good} 个红球。随机取一个，取到红球的概率是多少？请输入小数。`,`A bag has ${total} balls, ${good} red. What is the probability of drawing red? Enter a decimal.`,good/total);}
  finish();
}

// Grade 8
{
  const { add, finish } = makeLevel(8, '八年级 · 无双', 'Grade 8 · Hard');
  for(let i=0;i<10;i++){const n=9+i,a=2+(i%4);add('radicals and exponents',`√${n*n} + ${a}³ = ?`,`√${n*n} + ${a}³ = ?`,n+a**3);}
  for(let i=0;i<10;i++){const x=4+i,y=7+(i%6);add('simultaneous equations',`方程组 x+y=${x+y}，2x-y=${2*x-y}，求 x。`,`Solve x+y=${x+y}, 2x-y=${2*x-y}. Find x.`,x);}
  for(let i=0;i<10;i++){const a=5+i,b=12+(i%3)*4;const c=Math.sqrt(a*a+b*b);if(!Number.isInteger(c)){const aa=6+2*i,bb=8+2*i;add('pythagorean theorem',`直角三角形两直角边为 ${aa} 和 ${bb}，斜边是多少？`,`A right triangle has legs ${aa} and ${bb}. Find its hypotenuse.`,Math.sqrt(aa*aa+bb*bb));}else add('pythagorean theorem',`直角三角形两直角边为 ${a} 和 ${b}，斜边是多少？`,`A right triangle has legs ${a} and ${b}. Find its hypotenuse.`,c);}
  for(let i=0;i<10;i++){const x=2+i,m=-4+(i%3),b=15+i;add('linear function',`直线 y=${m}x+${b} 与 y=${m+2}x+${b-2*x} 的交点横坐标是多少？`,`Find the x-coordinate where y=${m}x+${b} intersects y=${m+2}x+${b-2*x}.`,x);}
  for(let i=0;i<10;i++){const vals=[3+i,7+i,8+i,12+i,15+i];const mean=vals.reduce((a,b)=>a+b,0)/5;add('statistics',`数据 ${vals.join('、')} 的平均数是多少？`,`Find the mean of ${vals.join(', ')}.`,mean);}
  finish();
}

// Grade 9
{
  const { add, finish } = makeLevel(9, '九年级 · 无双', 'Grade 9 · Hard');
  for(let i=0;i<10;i++){const r1=2+i,r2=-(3+(i%5)),b=-(r1+r2),c=r1*r2;add('quadratic equation',`方程 x² ${b>=0?'+ '+b:'- '+(-b)}x ${c>=0?'+ '+c:'- '+(-c)} = 0 的较大根是多少？`,`What is the larger root of x² ${b>=0?'+ '+b:'- '+(-b)}x ${c>=0?'+ '+c:'- '+(-c)} = 0?`,Math.max(r1,r2));}
  for(let i=0;i<10;i++){const a=3+i,h=-2+(i%5),k=7+i,x=h+2;const shifted=shiftedVariable('x',h);add('quadratic function',`函数 y=${a}(${shifted})²+${k}，当 x=${x} 时 y=?`,`For y=${a}(${shifted})²+${k}, find y when x=${x}.`,a*(x-h)**2+k);}
  for(let i=0;i<10;i++){const hyp=10+i*2,ratio=[0.5,Math.sqrt(2)/2,Math.sqrt(3)/2][i%3];const angle=[30,45,60][i%3];add('trigonometry',`直角三角形斜边为 ${hyp}，一个锐角为 ${angle}°，该角对边长是多少？`,`A right triangle has hypotenuse ${hyp} and an acute angle ${angle}°. Find the opposite side.`,hyp*ratio);}
  for(let i=0;i<10;i++){const r=5+i,d=6+(i%5);add('circle geometry',`圆半径为 ${r}，圆心到一条弦的距离为 ${d<r?d:r-1}，弦长是多少？`,`A circle has radius ${r}; the distance from center to a chord is ${d<r?d:r-1}. Find the chord length.`,2*Math.sqrt(r*r-(d<r?d:r-1)**2));}
  for(let i=0;i<10;i++){const n=7+i,k=2+(i%3);let comb=1;for(let j=1;j<=k;j++)comb=comb*(n-j+1)/j;add('combinatorics',`从 ${n} 个不同元素中选 ${k} 个，共有多少种组合？`,`How many ways can ${k} elements be chosen from ${n} distinct elements?`,comb);}
  finish();
}

// Grade 10
{
  const { add, finish } = makeLevel(10, '高一 · 无双', 'Grade 10 · Hard');
  for(let i=0;i<10;i++){const x=2+i,a=2+(i%4),b=5-i,c=3+(i%3);const linear=`${a}x${signedTerm(b)}`;add('composite function',`f(x)=${linear}，g(x)=x²-${c}，求 g(f(${x}))。`,`Let f(x)=${linear} and g(x)=x²-${c}. Find g(f(${x})).`,(a*x+b)**2-c);}
  for(let i=0;i<10;i++){const base=2+(i%4),p=5+i,q=2+(i%3);add('exponents and logarithms',`log_${base}(${base**p}) - ${q} = ?`,`log base ${base} of ${base**p}, minus ${q}, equals?`,p-q);}
  for(let i=0;i<10;i++){const first=5+i,d=3+(i%5),n=12+(i%4);add('arithmetic sequence',`等差数列首项 ${first}、公差 ${d}，前 ${n} 项和是多少？`,`An arithmetic sequence has first term ${first}, difference ${d}. Find the sum of first ${n} terms.`,n*(2*first+(n-1)*d)/2);}
  for(let i=0;i<10;i++){const x1=-5+i,y1=3+i,x2=x1+4+(i%3),y2=y1+6+(i%4);add('analytic geometry',`点 A(${x1},${y1})、B(${x2},${y2})，线段 AB 中点的横纵坐标之和是多少？`,`For A(${x1},${y1}) and B(${x2},${y2}), what is the sum of the midpoint's coordinates?`,(x1+x2+y1+y2)/2);}
  for(let i=0;i<10;i++){const n=8+i,k=3;const p=n*(n-1)*(n-2);add('permutations',`从 ${n} 个不同元素中依次选 3 个排列，共有多少种？`,`How many ordered arrangements select 3 from ${n} distinct elements?`,p);}
  finish();
}

// Grade 11
{
  const { add, finish } = makeLevel(11, '高二 · 无双', 'Grade 11 · Hard');
  for(let i=0;i<10;i++){const x=2+i,a=2+(i%4),b=3+(i%5),c=7-i;const polynomial=`${a}x³-${b}x²${signedTerm(c)}`;add('derivative',`f(x)=${polynomial}，求 f'(${x})。`,`For f(x)=${polynomial}, find f'(${x}).`,3*a*x*x-2*b*x);}
  for(let i=0;i<10;i++){const a=2+i,b=3+(i%5),c=-4+(i%4),d=5+i;add('vectors',`向量 u=(${a},${b})，v=(${c},${d})，内积 u·v 是多少？`,`For u=(${a},${b}) and v=(${c},${d}), find u·v.`,a*c+b*d);}
  for(let i=0;i<10;i++){const n=10+i,k=2+(i%3);let comb=1;for(let j=1;j<=k;j++)comb=comb*(n-j+1)/j;add('binomial probability',`公平硬币抛 ${n} 次，恰好 ${k} 次正面的概率乘以 2^${n} 等于多少？`,`A fair coin is tossed ${n} times. The probability of exactly ${k} heads multiplied by 2^${n} equals what?`,comb);}
  for(let i=0;i<10;i++){const first=3+i,r=2+(i%3),n=6+(i%4);add('geometric sequence',`等比数列首项 ${first}、公比 ${r}，前 ${n} 项和是多少？`,`A geometric sequence has first term ${first}, ratio ${r}. Find the sum of first ${n} terms.`,first*(r**n-1)/(r-1));}
  for(let i=0;i<10;i++){const h=-3+i,k=4-i,r=5+(i%6);const x=h+3;const shiftedX=shiftedVariable('x',h),shiftedY=shiftedVariable('y',k);add('circle equation',`圆 (${shiftedX})²+(${shiftedY})²=${r*r} 上横坐标为 ${x} 的点，其纵坐标较大值是多少？`,`On (${shiftedX})²+(${shiftedY})²=${r*r}, a point has x=${x}. Find the larger y-coordinate.`,k+Math.sqrt(r*r-9));}
  finish();
}

// Grade 12
{
  const { add, finish } = makeLevel(12, '高三 · 无双', 'Grade 12 · Hard');
  for(let i=0;i<10;i++){const a=2+(i%5),b=3+i,upper=2+(i%4);add('definite integral',`计算 ∫₀^${upper} (${a}x² + ${b}x) dx。`,`Evaluate ∫ from 0 to ${upper} of (${a}x² + ${b}x) dx.`,a*upper**3/3+b*upper**2/2);}
  for(let i=0;i<10;i++){const a=2+i,b=3+(i%5);add('limit',`计算 lim(x→0) [sin(${a}x)/(${b}x)]。`,`Evaluate lim as x→0 of sin(${a}x)/(${b}x).`,a/b);}
  for(let i=0;i<10;i++){const a=2+i,b=3+(i%4),c=5-i,d=7+(i%5);add('matrix determinant',`矩阵 [[${a},${b}],[${c},${d}]] 的行列式是多少？`,`Find the determinant of [[${a},${b}],[${c},${d}]].`,a*d-b*c);}
  for(let i=0;i<10;i++){const a=2+i,b=1+(i%5),c=-3+(i%4),d=4+i;add('complex numbers',`复数 (${a}+${b}i)(${c}+${d}i) 的实部是多少？`,`Find the real part of (${a}+${b}i)(${c}+${d}i).`,a*c-b*d);}
  for(let i=0;i<10;i++){const sum=20+i*2;const product=(sum/2)**2;add('optimization',`两个非负实数之和为 ${sum}，它们乘积的最大值是多少？`,`Two nonnegative real numbers sum to ${sum}. What is their maximum product?`,product);}
  finish();
}

const output = { schemaVersion: 1, subject: 'math', mode: 'hard', levels };
const target = path.join(__dirname, '..', 'data', 'hard-math.json');
fs.writeFileSync(target, JSON.stringify(output, null, 2) + '\n');
console.log(`Wrote ${target}: ${levels.length} levels, ${levels.reduce((n,l)=>n+l.questions.length,0)} questions`);
