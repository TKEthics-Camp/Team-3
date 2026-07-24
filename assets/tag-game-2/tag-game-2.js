(function(){let e=1e3,t=1001,n=1002,r=1003,i=1006,a=1008,o=1009,s=1012,c=1014,l=1015,u=1016,d=1017,f=1018,p=1020,m=1023,h=1026,g=1027,_=1029,v=1030,y=1031,b=1033,x=2300,S=2301,C=2302,w=2303,T=2400,E=2401,D=2402,O=`srgb`,ee=`srgb-linear`,k=`linear`,te=`srgb`,ne=7680,A=35044,re=2e3;function ie(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ae(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function oe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function se(){let e=oe(`canvas`);return e.style.display=`block`,e}let j={};function ce(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function le(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function M(...e){e=le(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function N(...e){e=le(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ue(...e){let t=e.join(` `);t in j||(j[t]=!0,M(...e))}function de(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}let fe={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};var pe=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}};let P=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),me=Math.PI/180,he=180/Math.PI;function ge(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(P[e&255]+P[e>>8&255]+P[e>>16&255]+P[e>>24&255]+`-`+P[t&255]+P[t>>8&255]+`-`+P[t>>16&15|64]+P[t>>24&255]+`-`+P[n&63|128]+P[n>>8&255]+`-`+P[n>>16&255]+P[n>>24&255]+P[r&255]+P[r>>8&255]+P[r>>16&255]+P[r>>24&255]).toLowerCase()}function F(e,t,n){return Math.max(t,Math.min(n,e))}function _e(e,t){return(e%t+t)%t}function ve(e,t,n){return(1-n)*e+n*t}function ye(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function I(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var L=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},be=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:M(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(F(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Se.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Se.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this.z=F(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this.z=F(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xe.copy(this).projectOnVector(e),this.sub(xe)}reflect(e){return this.sub(xe.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};let xe=new R,Se=new be;var z=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ce.makeScale(e,t)),this}rotate(e){return this.premultiply(Ce.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ce.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};let Ce=new z,we=new z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Te=new z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ee(){let e={enabled:!0,workingColorSpace:ee,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Oe(e.r),e.g=Oe(e.g),e.b=Oe(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ke(e.r),e.g=ke(e.g),e.b=ke(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?k:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ue(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ue(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ee]:{primaries:t,whitePoint:r,transfer:k,toXYZ:we,fromXYZ:Te,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:O},outputColorSpaceConfig:{drawingBufferColorSpace:O}},[O]:{primaries:t,whitePoint:r,transfer:te,toXYZ:we,fromXYZ:Te,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:O}}}),e}let De=Ee();function Oe(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ke(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}let Ae;var je=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ae===void 0&&(Ae=oe(`canvas`)),Ae.width=e.width,Ae.height=e.height;let t=Ae.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ae}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=oe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Oe(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Oe(t[e]/255)*255):t[e]=Oe(t[e]);return{data:t,width:e.width,height:e.height}}else return M(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}};let Me=0;var Ne=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:Me++}),this.uuid=ge(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Pe(r[t].image)):e.push(Pe(r[t]))}else e=Pe(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?je.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(M(`Texture: Unable to serialize Texture.`),{})}let B=0,Fe=new R;var Ie=class r extends pe{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,s=t,c=t,l=i,u=a,d=m,f=o,p=r.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:B++}),this.uuid=ge(),this.name=``,this.source=new Ne(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fe).x}get height(){return this.source.getSize(Fe).y}get depth(){return this.source.getSize(Fe).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){M(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){M(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x);break}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y);break}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ie.DEFAULT_IMAGE=null,Ie.DEFAULT_MAPPING=300,Ie.DEFAULT_ANISOTROPY=1;var Le=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this.z=F(this.z,e.z,t.z),this.w=F(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this.z=F(this.z,e,t),this.w=F(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Re=class extends pe{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Le(0,0,e,t),this.scissorTest=!1,this.viewport=new Le(0,0,e,t),this.textures=[];let r=new Ie({width:e,height:t,depth:n.depth}),a=n.count;for(let e=0;e<a;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ne(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},ze=class extends Re{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},V=class extends Ie{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Be=class extends Ie{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ve=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/H.setFromMatrixColumn(e,0).length(),i=1/H.setFromMatrixColumn(e,1).length(),a=1/H.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(He,e,Ue)}lookAt(e,t,n){let r=this.elements;return Ke.subVectors(e,t),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),We.crossVectors(n,Ke),We.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),We.crossVectors(n,Ke)),We.normalize(),Ge.crossVectors(Ke,We),r[0]=We.x,r[4]=Ge.x,r[8]=Ke.x,r[1]=We.y,r[5]=Ge.y,r[9]=Ke.y,r[2]=We.z,r[6]=Ge.z,r[10]=Ke.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],A=r[3],re=r[7],ie=r[11],ae=r[15];return i[0]=a*x+o*T+s*ee+c*A,i[4]=a*S+o*E+s*k+c*re,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*ae,i[1]=l*x+u*T+d*ee+f*A,i[5]=l*S+u*E+d*k+f*re,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*ae,i[2]=p*x+m*T+h*ee+g*A,i[6]=p*S+m*E+h*k+g*re,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*ae,i[3]=_*x+v*T+y*ee+b*A,i[7]=_*S+v*E+y*k+b*re,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=H.set(r[0],r[1],r[2]).length(),o=H.set(r[4],r[5],r[6]).length(),s=H.set(r[8],r[9],r[10]).length();i<0&&(a=-a),U.copy(this);let c=1/a,l=1/o,u=1/s;return U.elements[0]*=c,U.elements[1]*=c,U.elements[2]*=c,U.elements[4]*=l,U.elements[5]*=l,U.elements[6]*=l,U.elements[8]*=u,U.elements[9]*=u,U.elements[10]*=u,t.setFromRotationMatrix(U),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=re,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=re,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};let H=new R,U=new Ve,He=new R(0,0,0),Ue=new R(1,1,1),We=new R,Ge=new R,Ke=new R,qe=new Ve,Je=new be;var Ye=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(F(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-F(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(F(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-F(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(F(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-F(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:M(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qe.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qe,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Je.setFromEuler(this),this.setFromQuaternion(Je,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ye.DEFAULT_ORDER=`XYZ`;var Xe=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}};let Ze=0,Qe=new R,$e=new be,et=new Ve,tt=new R,nt=new R,rt=new R,it=new be,at=new R(1,0,0),ot=new R(0,1,0),st=new R(0,0,1),ct={type:`added`},lt={type:`removed`},ut={type:`childadded`,child:null},dt={type:`childremoved`,child:null};var ft=class e extends pe{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:Ze++}),this.uuid=ge(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new Ye,r=new be,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new z}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xe,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $e.setFromAxisAngle(e,t),this.quaternion.multiply($e),this}rotateOnWorldAxis(e,t){return $e.setFromAxisAngle(e,t),this.quaternion.premultiply($e),this}rotateX(e){return this.rotateOnAxis(at,e)}rotateY(e){return this.rotateOnAxis(ot,e)}rotateZ(e){return this.rotateOnAxis(st,e)}translateOnAxis(e,t){return Qe.copy(e).applyQuaternion(this.quaternion),this.position.add(Qe.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(at,e)}translateY(e){return this.translateOnAxis(ot,e)}translateZ(e){return this.translateOnAxis(st,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(et.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tt.copy(e):tt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),nt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?et.lookAt(nt,tt,this.up):et.lookAt(tt,nt,this.up),this.quaternion.setFromRotationMatrix(et),r&&(et.extractRotation(r.matrixWorld),$e.setFromRotationMatrix(et),this.quaternion.premultiply($e.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(N(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ct),ut.child=e,this.dispatchEvent(ut),ut.child=null):N(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lt),dt.child=e,this.dispatchEvent(dt),dt.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),et.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),et.multiply(e.parent.matrixWorld)),e.applyMatrix4(et),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ct),ut.child=e,this.dispatchEvent(ut),ut.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nt,e,rt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nt,it,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};ft.DEFAULT_UP=new R(0,1,0),ft.DEFAULT_MATRIX_AUTO_UPDATE=!0,ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pt=class extends ft{constructor(){super(),this.isGroup=!0,this.type=`Group`}};let mt={type:`move`};var ht=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mt)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};let gt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_t={h:0,s:0,l:0},vt={h:0,s:0,l:0};function yt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=O){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=De.workingColorSpace){return this.r=e,this.g=t,this.b=n,De.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=De.workingColorSpace){if(e=_e(e,1),t=F(t,0,1),n=F(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=yt(i,r,e+1/3),this.g=yt(i,r,e),this.b=yt(i,r,e-1/3)}return De.colorSpaceToWorking(this,r),this}setStyle(e,t=O){function n(t){t!==void 0&&parseFloat(t)<1&&M(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:M(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);M(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=O){let n=gt[e.toLowerCase()];return n===void 0?M(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oe(e.r),this.g=Oe(e.g),this.b=Oe(e.b),this}copyLinearToSRGB(e){return this.r=ke(e.r),this.g=ke(e.g),this.b=ke(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=O){return De.workingToColorSpace(bt.copy(this),e),Math.round(F(bt.r*255,0,255))*65536+Math.round(F(bt.g*255,0,255))*256+Math.round(F(bt.b*255,0,255))}getHexString(e=O){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=De.workingColorSpace){De.workingToColorSpace(bt.copy(this),t);let n=bt.r,r=bt.g,i=bt.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=De.workingColorSpace){return De.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=O){De.workingToColorSpace(bt.copy(this),e);let t=bt.r,n=bt.g,r=bt.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(_t),this.setHSL(_t.h+e,_t.s+t,_t.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_t),e.getHSL(vt);let n=ve(_t.h,vt.h,t),r=ve(_t.s,vt.s,t),i=ve(_t.l,vt.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};let bt=new W;W.NAMES=gt;var xt=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new W(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},St=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ct=class extends ft{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};let wt=new R,Tt=new R,Et=new R,Dt=new R,Ot=new R,kt=new R,At=new R,jt=new R,Mt=new R,Nt=new R,Pt=new Le,Ft=new Le,It=new Le;var Lt=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wt.subVectors(e,t),r.cross(wt);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){wt.subVectors(r,t),Tt.subVectors(n,t),Et.subVectors(e,t);let a=wt.dot(wt),o=wt.dot(Tt),s=wt.dot(Et),c=Tt.dot(Tt),l=Tt.dot(Et),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dt)===null?!1:Dt.x>=0&&Dt.y>=0&&Dt.x+Dt.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Dt)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Dt.x),s.addScaledVector(a,Dt.y),s.addScaledVector(o,Dt.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Pt.setScalar(0),Ft.setScalar(0),It.setScalar(0),Pt.fromBufferAttribute(e,t),Ft.fromBufferAttribute(e,n),It.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Pt,i.x),a.addScaledVector(Ft,i.y),a.addScaledVector(It,i.z),a}static isFrontFacing(e,t,n,r){return wt.subVectors(n,t),Tt.subVectors(e,t),wt.cross(Tt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wt.subVectors(this.c,this.b),Tt.subVectors(this.a,this.b),wt.cross(Tt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ot.subVectors(r,n),kt.subVectors(i,n),jt.subVectors(e,n);let s=Ot.dot(jt),c=kt.dot(jt);if(s<=0&&c<=0)return t.copy(n);Mt.subVectors(e,r);let l=Ot.dot(Mt),u=kt.dot(Mt);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Ot,a);Nt.subVectors(e,i);let f=Ot.dot(Nt),p=kt.dot(Nt);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(kt,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return At.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(At,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ot,a).addScaledVector(kt,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},G=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,zt):zt.fromBufferAttribute(r,t),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Bt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Bt.copy(e.boundingBox)),Bt.applyMatrix4(e.matrixWorld),this.union(Bt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qt),Jt.subVectors(this.max,qt),Vt.subVectors(e.a,qt),Ht.subVectors(e.b,qt),Ut.subVectors(e.c,qt),Wt.subVectors(Ht,Vt),Gt.subVectors(Ut,Ht),Kt.subVectors(Vt,Ut);let t=[0,-Wt.z,Wt.y,0,-Gt.z,Gt.y,0,-Kt.z,Kt.y,Wt.z,0,-Wt.x,Gt.z,0,-Gt.x,Kt.z,0,-Kt.x,-Wt.y,Wt.x,0,-Gt.y,Gt.x,0,-Kt.y,Kt.x,0];return!Zt(t,Vt,Ht,Ut,Jt)||(t=[1,0,0,0,1,0,0,0,1],!Zt(t,Vt,Ht,Ut,Jt))?!1:(Yt.crossVectors(Wt,Gt),t=[Yt.x,Yt.y,Yt.z],Zt(t,Vt,Ht,Ut,Jt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};let Rt=[new R,new R,new R,new R,new R,new R,new R,new R],zt=new R,Bt=new G,Vt=new R,Ht=new R,Ut=new R,Wt=new R,Gt=new R,Kt=new R,qt=new R,Jt=new R,Yt=new R,Xt=new R;function Zt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Xt.fromArray(e,a);let o=i.x*Math.abs(Xt.x)+i.y*Math.abs(Xt.y)+i.z*Math.abs(Xt.z),s=t.dot(Xt),c=n.dot(Xt),l=r.dot(Xt);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}let Qt=new R,$t=new L,en=0;var tn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:en++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=A,this.updateRanges=[],this.gpuType=l,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXY(t,$t.x,$t.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ye(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=I(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ye(t,this.array)),t}setX(e,t){return this.normalized&&(t=I(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ye(t,this.array)),t}setY(e,t){return this.normalized&&(t=I(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ye(t,this.array)),t}setZ(e,t){return this.normalized&&(t=I(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ye(t,this.array)),t}setW(e,t){return this.normalized&&(t=I(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=I(t,this.array),n=I(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=I(t,this.array),n=I(n,this.array),r=I(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=I(t,this.array),n=I(n,this.array),r=I(r,this.array),i=I(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},nn=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},rn=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},an=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}};let on=new G,sn=new R,cn=new R;var ln=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?on.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sn.subVectors(e,this.center);let t=sn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(sn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sn.copy(e.center).add(cn)),this.expandByPoint(sn.copy(e.center).sub(cn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};let un=0,dn=new Ve,fn=new ft,pn=new R,mn=new G,hn=new G,gn=new R;var _n=class e extends pe{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:un++}),this.uuid=ge(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ie(e)?rn:nn)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return fn.lookAt(e),fn.updateMatrix(),this.applyMatrix4(fn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pn).negate(),this.translate(pn.x,pn.y,pn.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new an(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&M(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new G);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){N(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];mn.setFromBufferAttribute(n),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&N(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){N(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];hn.setFromBufferAttribute(n),this.morphTargetsRelative?(gn.addVectors(mn.min,hn.min),mn.expandByPoint(gn),gn.addVectors(mn.max,hn.max),mn.expandByPoint(gn)):(mn.expandByPoint(hn.min),mn.expandByPoint(hn.max))}mn.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(gn));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)gn.fromBufferAttribute(a,t),o&&(pn.fromBufferAttribute(e,t),gn.add(pn)),r=Math.max(r,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&N(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){N(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new tn(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let c=new R,l=new R,u=new R,d=new L,f=new L,p=new L,m=new R,h=new R;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new R,y=new R,b=new R,x=new R;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new tn(a,r,i)}if(this.index===null)return M(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},vn=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=A,this.updateRanges=[],this.version=0,this.uuid=ge()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ge()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ge()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};let yn=new R;var bn=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ye(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=I(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=I(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=I(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=I(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=I(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ye(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ye(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ye(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ye(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=I(t,this.array),n=I(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=I(t,this.array),n=I(n,this.array),r=I(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=I(t,this.array),n=I(n,this.array),r=I(r,this.array),i=I(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){ce(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ce(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};let xn=0;var Sn=class extends pe{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:xn++}),this.uuid=ge(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ne,this.stencilZFail=ne,this.stencilZPass=ne,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){M(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){M(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Cn=class extends Sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};let wn,Tn=new R,En=new R,Dn=new R,On=new L,kn=new L,An=new Ve,jn=new R,Mn=new R,Nn=new R,Pn=new L,Fn=new L,In=new L;var Ln=class extends ft{constructor(e=new Cn){if(super(),this.isSprite=!0,this.type=`Sprite`,wn===void 0){wn=new _n;let e=new vn(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);wn.setIndex([0,1,2,0,2,3]),wn.setAttribute(`position`,new bn(e,3,0,!1)),wn.setAttribute(`uv`,new bn(e,2,3,!1))}this.geometry=wn,this.material=e,this.center=new L(.5,.5),this.count=1}raycast(e,t){e.camera===null&&N(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),En.setFromMatrixScale(this.matrixWorld),An.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&En.multiplyScalar(-Dn.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Rn(jn.set(-.5,-.5,0),Dn,a,En,r,i),Rn(Mn.set(.5,-.5,0),Dn,a,En,r,i),Rn(Nn.set(.5,.5,0),Dn,a,En,r,i),Pn.set(0,0),Fn.set(1,0),In.set(1,1);let o=e.ray.intersectTriangle(jn,Mn,Nn,!1,Tn);if(o===null&&(Rn(Mn.set(-.5,.5,0),Dn,a,En,r,i),Fn.set(0,1),o=e.ray.intersectTriangle(jn,Nn,Mn,!1,Tn),o===null))return;let s=e.ray.origin.distanceTo(Tn);s<e.near||s>e.far||t.push({distance:s,point:Tn.clone(),uv:Lt.getInterpolation(Tn,jn,Mn,Nn,Pn,Fn,In,new L),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Rn(e,t,n,r,i,a){On.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?kn.copy(On):(kn.x=a*On.x-i*On.y,kn.y=i*On.x+a*On.y),e.copy(t),e.x+=kn.x,e.y+=kn.y,e.applyMatrix4(An)}let zn=new R,Bn=new R,Vn=new R,Hn=new R,Un=new R,Wn=new R,Gn=new R;var Kn=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bn.copy(e).add(t).multiplyScalar(.5),Vn.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Bn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Vn),o=Hn.dot(this.direction),s=-Hn.dot(Vn),c=Hn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bn).addScaledVector(Vn,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);let n=zn.dot(this.direction),r=zn.dot(zn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,i){Un.subVectors(t,e),Wn.subVectors(n,e),Gn.crossVectors(Un,Wn);let a=this.direction.dot(Gn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);let s=o*this.direction.dot(Wn.crossVectors(Hn,Wn));if(s<0)return null;let c=o*this.direction.dot(Un.cross(Hn));if(c<0||s+c>a)return null;let l=-o*Hn.dot(Gn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},K=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};let qn=new Ve,Jn=new Kn,Yn=new ln,Xn=new R,Zn=new R,Qn=new R,$n=new R,er=new R,tr=new R,nr=new R,rr=new R;var q=class extends ft{constructor(e=new _n,t=new K){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){tr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(er.fromBufferAttribute(s,e),a?tr.addScaledVector(er,r):tr.addScaledVector(er.sub(t),r))}t.add(tr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yn.copy(n.boundingSphere),Yn.applyMatrix4(i),Jn.copy(e.ray).recast(e.near),!(Yn.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Yn,Xn)===null||Jn.origin.distanceToSquared(Xn)>(e.far-e.near)**2))&&(qn.copy(i).invert(),Jn.copy(e.ray).applyMatrix4(qn),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ar(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ar(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ar(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ar(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function ir(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;rr.copy(s),rr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(rr);return l<n.near||l>n.far?null:{distance:l,point:rr.clone(),object:e}}function ar(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Zn),e.getVertexPosition(c,Qn),e.getVertexPosition(l,$n);let u=ir(e,t,n,r,Zn,Qn,$n,nr);if(u){let e=new R;Lt.getBarycoord(nr,Zn,Qn,$n,e),i&&(u.uv=Lt.getInterpolatedAttribute(i,s,c,l,e,new L)),a&&(u.uv1=Lt.getInterpolatedAttribute(a,s,c,l,e,new L)),o&&(u.normal=Lt.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};Lt.getNormal(Zn,Qn,$n,t.normal),u.face=t,u.barycoord=e}return u}var or=class extends Ie{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};let sr=new R,cr=new R,lr=new z;var ur=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=sr.subVectors(n,t).cross(cr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(sr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lr.getNormalMatrix(e),r=this.coplanarPoint(sr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};let dr=new ln,fr=new L(.5,.5),pr=new R;var mr=class{constructor(e=new ur,t=new ur,n=new ur,r=new ur,i=new ur,a=new ur){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=re,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476+fr.distanceTo(e.center),dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pr.x=r.normal.x>0?e.max.x:e.min.x,pr.y=r.normal.y>0?e.max.y:e.min.y,pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hr=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};let gr=new R,_r=new R,vr=new Ve,yr=new Kn,br=new ln,xr=new R,Sr=new R;var Cr=class extends ft{constructor(e=new _n,t=new hr){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)gr.fromBufferAttribute(t,e-1),_r.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=gr.distanceTo(_r);e.setAttribute(`lineDistance`,new an(n,1))}else M(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),br.radius+=i,e.ray.intersectsSphere(br)===!1)return;vr.copy(r).invert(),yr.copy(e.ray).applyMatrix4(vr);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=wr(this,e,yr,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=wr(this,e,yr,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=wr(this,e,yr,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=wr(this,e,yr,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wr(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(gr.fromBufferAttribute(s,i),_r.fromBufferAttribute(s,a),n.distanceSqToSegment(gr,_r,xr,Sr)>r)return;xr.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(xr);if(!(c<t.near||c>t.far))return{distance:c,point:Sr.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}let Tr=new R,Er=new R;var Dr=class extends Cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Tr.fromBufferAttribute(t,e),Er.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Tr.distanceTo(Er);e.setAttribute(`lineDistance`,new an(n,1))}else M(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Or=class extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};let kr=new Ve,Ar=new Kn,jr=new ln,Mr=new R;var Nr=class extends ft{constructor(e=new _n,t=new Or){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),jr.radius+=i,e.ray.intersectsSphere(jr)===!1)return;kr.copy(r).invert(),Ar.copy(e.ray).applyMatrix4(kr);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Mr.fromBufferAttribute(l,n),Pr(Mr,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Mr.fromBufferAttribute(l,a),Pr(Mr,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Pr(e,t,n,r,i,a,o){let s=Ar.distanceSqToPoint(e);if(s<n){let n=new R;Ar.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fr=class extends Ie{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ir=class extends Ie{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Lr=class extends Ie{constructor(e,t,n=c,i,a,o,s=r,l=r,u,d=h,f=1){if(d!==1026&&d!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:f},i,a,o,s,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ne(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rr=class extends Lr{constructor(e,t=c,n=301,i,a,o=r,s=r,l,u=h){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,i,a,o,s,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zr=class extends Ie{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},J=class e extends _n{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new an(c,3)),this.setAttribute(`normal`,new an(l,3)),this.setAttribute(`uv`,new an(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Br=class e extends _n{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new an(u,3)),this.setAttribute(`normal`,new an(d,3)),this.setAttribute(`uv`,new an(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vr=class e extends Br{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hr=class e extends _n{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new an(p,3)),this.setAttribute(`normal`,new an(m,3)),this.setAttribute(`uv`,new an(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ur=class e extends _n{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new an(p,3)),this.setAttribute(`normal`,new an(m,3)),this.setAttribute(`uv`,new an(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Wr=class e extends _n{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new R,f=new R,p=new R;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new an(c,3)),this.setAttribute(`normal`,new an(l,3)),this.setAttribute(`uv`,new an(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Gr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(M(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Kr(e){let t={};for(let n=0;n<e.length;n++){let r=Gr(e[n]);for(let e in r)t[e]=r[e]}return t}function qr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Jr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}let Yr={clone:Gr,merge:Kr};var Xr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qr=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xr,this.fragmentShader=Zr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=qr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$r=class extends Qr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ei=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Y=class extends Sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ti=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ni=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ri(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var ii=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},ai=class extends ii{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:T,endingEnd:T}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case E:i=e,o=2*t-n;break;case D:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case E:a=e,s=2*n-t;break;case D:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},oi=class extends ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},si=class extends ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ci=class extends ii{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},li=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ri(t,this.TimeBufferType),this.values=ri(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ri(e.times,Array),values:ri(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new si(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ai(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ci(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case x:t=this.InterpolantFactoryMethodDiscrete;break;case S:t=this.InterpolantFactoryMethodLinear;break;case C:t=this.InterpolantFactoryMethodSmooth;break;case w:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return M(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return x;case this.InterpolantFactoryMethodLinear:return S;case this.InterpolantFactoryMethodSmooth:return C;case this.InterpolantFactoryMethodBezier:return w}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(N(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(N(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){N(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){N(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ae(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){N(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===C,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};li.prototype.ValueTypeName=``,li.prototype.TimeBufferType=Float32Array,li.prototype.ValueBufferType=Float32Array,li.prototype.DefaultInterpolation=S;var ui=class extends li{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName=`bool`,ui.prototype.ValueBufferType=Array,ui.prototype.DefaultInterpolation=x,ui.prototype.InterpolantFactoryMethodLinear=void 0,ui.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends li{constructor(e,t,n,r){super(e,t,n,r)}};di.prototype.ValueTypeName=`color`;var fi=class extends li{constructor(e,t,n,r){super(e,t,n,r)}};fi.prototype.ValueTypeName=`number`;var pi=class extends ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)be.slerpFlat(i,0,a,c-o,a,c,s);return i}},mi=class extends li{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new pi(this.times,this.values,this.getValueSize(),e)}};mi.prototype.ValueTypeName=`quaternion`,mi.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends li{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName=`string`,hi.prototype.ValueBufferType=Array,hi.prototype.DefaultInterpolation=x,hi.prototype.InterpolantFactoryMethodLinear=void 0,hi.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends li{constructor(e,t,n,r){super(e,t,n,r)}};gi.prototype.ValueTypeName=`vector`;let _i=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}};var vi=class{constructor(e){this.manager=e===void 0?_i:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};vi.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var yi=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},bi=class extends yi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};let xi=new Ve,Si=new R,Ci=new R;var wi=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.mapType=o,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Si.setFromMatrixPosition(e.matrixWorld),t.position.copy(Si),Ci.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ci),t.updateMatrixWorld(),xi.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xi,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xi)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};let Ti=new R,Ei=new be,Di=new R;var Oi=class extends ft{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=re,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ti,Ei,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ti,Ei,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ti,Ei,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ti,Ei,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};let ki=new R,Ai=new L,ji=new L;var Mi=class extends Oi{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=he*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(me*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return he*2*Math.atan(Math.tan(me*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Ai,ji),t.subVectors(ji,Ai)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(me*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ni=class extends wi{constructor(){super(new Mi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=he*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Pi=class extends yi{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Ni}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Fi=class extends wi{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0}},Ii=class extends yi{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Fi}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Li=class extends Oi{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ri=class extends wi{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends yi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Ri}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Bi=class extends yi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Vi=class extends ft{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mi(-90,1,e,t);r.layers=this.layers,this.add(r);let i=new Mi(-90,1,e,t);i.layers=this.layers,this.add(i);let a=new Mi(-90,1,e,t);a.layers=this.layers,this.add(a);let o=new Mi(-90,1,e,t);o.layers=this.layers,this.add(o);let s=new Mi(-90,1,e,t);s.layers=this.layers,this.add(s);let c=new Mi(-90,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Hi=class extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};let Ui=`\\[\\]\\.:\\/`,Wi=RegExp(`[`+Ui+`]`,`g`);``+Ui;let Gi=`[^`+Ui.replace(`\\.`,``)+`]`,Ki=RegExp(`^((?:[^\\[\\]\\.:\\/]+[\\/:])*)`+`(WCOD+)?`.replace(`WCOD`,Gi)+`(?:\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?)?\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?$`),qi=[`material`,`materials`,`bones`,`map`];var Ji=class{constructor(e,t,n){let r=n||Yi.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yi=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Wi,``)}static parseTrackName(e){let t=Ki.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);qi.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){M(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){N(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){N(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){N(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){N(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){N(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){N(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){N(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;N(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){N(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){N(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yi.Composite=Ji,Yi.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yi.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yi.prototype.GetterByBindingType=[Yi.prototype._getValue_direct,Yi.prototype._getValue_array,Yi.prototype._getValue_arrayElement,Yi.prototype._getValue_toArray],Yi.prototype.SetterByBindingTypeAndVersioning=[[Yi.prototype._setValue_direct,Yi.prototype._setValue_direct_setNeedsUpdate,Yi.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yi.prototype._setValue_array,Yi.prototype._setValue_array_setNeedsUpdate,Yi.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yi.prototype._setValue_arrayElement,Yi.prototype._setValue_arrayElement_setNeedsUpdate,Yi.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yi.prototype._setValue_fromArray,Yi.prototype._setValue_fromArray_setNeedsUpdate,Yi.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xi=class extends Dr{constructor(e=10,t=10,n=4473924,r=8947848){n=new W(n),r=new W(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new _n;l.setAttribute(`position`,new an(s,3)),l.setAttribute(`color`,new an(c,3));let u=new hr({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}};function Zi(e,t,n,r){let i=Qi(r);switch(n){case 1021:return e*t;case 1028:return e*t/i.components*i.byteLength;case _:return e*t/i.components*i.byteLength;case v:return e*t*2/i.components*i.byteLength;case y:return e*t*2/i.components*i.byteLength;case 1022:return e*t*3/i.components*i.byteLength;case m:return e*t*4/i.components*i.byteLength;case b:return e*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Qi(e){switch(e){case o:case 1010:return{byteLength:1,components:1};case s:case 1011:case u:return{byteLength:2,components:1};case d:case f:return{byteLength:2,components:4};case c:case 1013:case l:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`183`}})),typeof window<`u`&&(window.__THREE__?M(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`183`);
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function $i(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ea(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}let X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},ta={basic:{uniforms:Kr([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:Kr([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:Kr([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:Kr([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:Kr([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new W(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:Kr([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:Kr([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:Kr([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:Kr([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:Kr([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:Kr([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:Kr([Z.common,Z.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:Kr([Z.lights,Z.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};ta.physical={uniforms:Kr([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};let na={r:0,b:0,g:0},ra=new Ye,ia=new Ve;function aa(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new q(new J(1,1,1),new Qr({name:`BackgroundCubeMaterial`,uniforms:Gr(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),r.update(l)),ra.copy(n.backgroundRotation),ra.x*=-1,ra.y*=-1,ra.z*=-1,i.isCubeTexture&&i.isRenderTargetTexture===!1&&(ra.y*=-1,ra.z*=-1),l.material.uniforms.envMap.value=i,l.material.uniforms.flipEnvMap.value=i.isCubeTexture&&i.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ia.makeRotationFromEuler(ra)),l.material.toneMapped=De.getTransfer(i.colorSpace)!==te,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new Hr(2,2),new Qr({name:`BackgroundMaterial`,uniforms:Gr(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,`map`,{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=De.getTransfer(i.colorSpace)!==te,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(na,Jr(e)),n.buffers.color.setClear(na.r,na.g,na.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function oa(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function sa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function ca(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(M(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function la(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ur,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}let ua=[.125,.215,.35,.446,.526,.582],da=new Li,fa=new W,pa=null,ma=0,ha=0,ga=!1,_a=new R;var va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=_a}=i;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ha),this._renderer.xr.enabled=ga,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:i,minFilter:i,generateMipmaps:!1,type:u,format:m,colorSpace:ee,depthBuffer:!1},r=ba(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ba(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ya(r)),this._blurMaterial=Ca(r,e,t),this._ggxMaterial=Sa(r,e,t)}return r}_compileMaterial(e){let t=new q(new _n,e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,n,r,i){let a=new Mi(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(fa),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new q(new J,new K({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(fa),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;xa(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wa());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;xa(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,da)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-4?n-d+4:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,xa(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,da),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,xa(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,da)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&N(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):20;m>20&&M(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let h=[],g=0;for(let e=0;e<20;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];xa(t,3*v*(r>_-4?r-_+4:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,da)}};function ya(e){let t=[],n=[],r=[],i=e,a=e-4+1+ua.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-4?s=ua[o-e+4-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new _n;h.setAttribute(`position`,new tn(f,3)),h.setAttribute(`uv`,new tn(p,2)),h.setAttribute(`faceIndex`,new tn(m,1)),r.push(new q(h,null)),i>4&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function ba(e,t,n){let r=new ze(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function xa(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Sa(e,t,n){return new Qr({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ea(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ca(e,t,n){let r=new Float32Array(20),i=new R(0,1,0);return new Qr({name:`SphericalGaussianBlur`,defines:{n:20,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wa(){return new Qr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ta(){return new Qr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Da=class extends ze{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1};this.texture=new Fr([n,n,n,n,n,n]),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new J(5,5,5),a=new Qr({name:`CubemapFromEquirect`,uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let o=new q(r,a),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=i),new Vi(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Oa(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Da(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new va(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new va(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ka(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ue(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Aa(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?rn:nn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ja(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Ma(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:N(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Na(e,t,n){let r=new WeakMap,i=new Le;function a(a,o,s){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u===void 0?0:u.length,f=r.get(o);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],u=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new V(g,m,h,d);_.type=l,_.needsUpdate=!0;let v=p*4;for(let t=0;t<d;t++){let r=s[t],o=c[t],l=u[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(l,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=l.itemSize===4?i.w:1)}}f={count:d,texture:_,size:new L(m,h)},r.set(o,f);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:a}}function Pa(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}let Fa={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ia(e,t,n,r,i){let a=new ze(t,n,{type:e,depthBuffer:r,stencilBuffer:i}),o=new ze(t,n,{type:u,depthBuffer:!1,stencilBuffer:!1}),s=new _n;s.setAttribute(`position`,new an([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new an([0,2,0,0,2,0],2));let c=new $r({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new q(s,c),d=new Li(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(a),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=a,r=o;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,c.defines={},De.getTransfer(f)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=Fa[p];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(l,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o.dispose(),s.dispose(),c.dispose()}}let La=new Ie,Ra=new Lr(1,1),za=new V,Ba=new Be,Va=new Fr,Ha=[],Ua=[],Wa=new Float32Array(16),Ga=new Float32Array(9),Ka=new Float32Array(4);function qa(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ha[i];if(a===void 0&&(a=new Float32Array(i),Ha[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ja(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ya(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Xa(e,t){let n=Ua[t];n===void 0&&(n=new Int32Array(t),Ua[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Za(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Qa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ja(n,t))return;e.uniform2fv(this.addr,t),Ya(n,t)}}function $a(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ja(n,t))return;e.uniform3fv(this.addr,t),Ya(n,t)}}function eo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ja(n,t))return;e.uniform4fv(this.addr,t),Ya(n,t)}}function to(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ja(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ya(n,t)}else{if(Ja(n,r))return;Ka.set(r),e.uniformMatrix2fv(this.addr,!1,Ka),Ya(n,r)}}function no(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ja(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ya(n,t)}else{if(Ja(n,r))return;Ga.set(r),e.uniformMatrix3fv(this.addr,!1,Ga),Ya(n,r)}}function ro(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ja(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ya(n,t)}else{if(Ja(n,r))return;Wa.set(r),e.uniformMatrix4fv(this.addr,!1,Wa),Ya(n,r)}}function io(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ao(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ja(n,t))return;e.uniform2iv(this.addr,t),Ya(n,t)}}function oo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ja(n,t))return;e.uniform3iv(this.addr,t),Ya(n,t)}}function so(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ja(n,t))return;e.uniform4iv(this.addr,t),Ya(n,t)}}function co(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function lo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ja(n,t))return;e.uniform2uiv(this.addr,t),Ya(n,t)}}function uo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ja(n,t))return;e.uniform3uiv(this.addr,t),Ya(n,t)}}function fo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ja(n,t))return;e.uniform4uiv(this.addr,t),Ya(n,t)}}function po(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ra.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ra):a=La,n.setTexture2D(t||a,i)}function mo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ba,i)}function ho(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Va,i)}function go(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||za,i)}function _o(e){switch(e){case 5126:return Za;case 35664:return Qa;case 35665:return $a;case 35666:return eo;case 35674:return to;case 35675:return no;case 35676:return ro;case 5124:case 35670:return io;case 35667:case 35671:return ao;case 35668:case 35672:return oo;case 35669:case 35673:return so;case 5125:return co;case 36294:return lo;case 36295:return uo;case 36296:return fo;case 35678:case 36198:case 36298:case 36306:case 35682:return po;case 35679:case 36299:case 36307:return mo;case 35680:case 36300:case 36308:case 36293:return ho;case 36289:case 36303:case 36311:case 36292:return go}}function vo(e,t){e.uniform1fv(this.addr,t)}function yo(e,t){let n=qa(t,this.size,2);e.uniform2fv(this.addr,n)}function bo(e,t){let n=qa(t,this.size,3);e.uniform3fv(this.addr,n)}function xo(e,t){let n=qa(t,this.size,4);e.uniform4fv(this.addr,n)}function So(e,t){let n=qa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Co(e,t){let n=qa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wo(e,t){let n=qa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function To(e,t){e.uniform1iv(this.addr,t)}function Eo(e,t){e.uniform2iv(this.addr,t)}function Do(e,t){e.uniform3iv(this.addr,t)}function Oo(e,t){e.uniform4iv(this.addr,t)}function ko(e,t){e.uniform1uiv(this.addr,t)}function Ao(e,t){e.uniform2uiv(this.addr,t)}function jo(e,t){e.uniform3uiv(this.addr,t)}function Mo(e,t){e.uniform4uiv(this.addr,t)}function No(e,t,n){let r=this.cache,i=t.length,a=Xa(n,i);Ja(r,a)||(e.uniform1iv(this.addr,a),Ya(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ra:La;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Po(e,t,n){let r=this.cache,i=t.length,a=Xa(n,i);Ja(r,a)||(e.uniform1iv(this.addr,a),Ya(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ba,a[e])}function Fo(e,t,n){let r=this.cache,i=t.length,a=Xa(n,i);Ja(r,a)||(e.uniform1iv(this.addr,a),Ya(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Va,a[e])}function Io(e,t,n){let r=this.cache,i=t.length,a=Xa(n,i);Ja(r,a)||(e.uniform1iv(this.addr,a),Ya(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||za,a[e])}function Lo(e){switch(e){case 5126:return vo;case 35664:return yo;case 35665:return bo;case 35666:return xo;case 35674:return So;case 35675:return Co;case 35676:return wo;case 5124:case 35670:return To;case 35667:case 35671:return Eo;case 35668:case 35672:return Do;case 35669:case 35673:return Oo;case 5125:return ko;case 36294:return Ao;case 36295:return jo;case 36296:return Mo;case 35678:case 36198:case 36298:case 36306:case 35682:return No;case 35679:case 36299:case 36307:return Po;case 35680:case 36300:case 36308:case 36293:return Fo;case 36289:case 36303:case 36311:case 36292:return Io}}var Ro=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_o(t.type)}},zo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lo(t.type)}},Bo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}};let Vo=/(\w+)(\])?(\[|\.)?/g;function Ho(e,t){e.seq.push(t),e.map[t.id]=t}function Uo(e,t,n){let r=e.name,i=r.length;for(Vo.lastIndex=0;;){let a=Vo.exec(r),o=Vo.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ho(n,l===void 0?new Ro(s,e,t):new zo(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Bo(s),Ho(n,e)),n=e}}}var Wo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Uo(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Go(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}let Ko=0;function qo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}let Jo=new z;function Yo(e){De._getMatrix(Jo,De.workingColorSpace,e);let t=`mat3( ${Jo.elements.map(e=>e.toFixed(4))} )`;switch(De.getTransfer(e)){case k:return[t,`LinearTransferOETF`];case te:return[t,`sRGBTransferOETF`];default:return M(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Xo(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+qo(e.getShaderSource(t),r)}else return i}function Zo(e,t){let n=Yo(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}let Qo={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function $o(e,t){let n=Qo[t];return n===void 0?(M(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}let es=new R;function ts(){return De.getLuminanceCoefficients(es),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${es.x.toFixed(4)}, ${es.y.toFixed(4)}, ${es.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ns(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(as).join(`
`)}function rs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function is(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function as(e){return e!==``}function os(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ss(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}let cs=/^[ \t]*#include +<([\w\d./]+)>/gm;function ls(e){return e.replace(cs,ds)}let us=new Map;function ds(e,t){let n=X[t];if(n===void 0){let e=us.get(t);if(e!==void 0)n=X[e],M(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return ls(n)}let fs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ps(e){return e.replace(fs,ms)}function ms(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function hs(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}let gs={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function _s(e){return gs[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}let vs={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ys(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:vs[e.envMapMode]||`ENVMAP_TYPE_CUBE`}let bs={302:`ENVMAP_MODE_REFRACTION`};function xs(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:bs[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}let Ss={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Cs(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ss[e.combine]||`ENVMAP_BLENDING_NONE`}function ws(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ts(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=_s(n),l=ys(n),u=xs(n),d=Cs(n),f=ws(n),p=ns(n),m=rs(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(as).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(as).join(`
`),_.length>0&&(_+=`
`)):(g=[hs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(as).join(`
`),_=[hs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:$o(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Zo(`linearToOutputTexel`,n.outputColorSpace),ts(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(as).join(`
`)),o=ls(o),o=os(o,n),o=ss(o,n),s=ls(s),s=os(s,n),s=ss(s,n),o=ps(o),s=ps(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Go(i,i.VERTEX_SHADER,y),S=Go(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Xo(i,x,`vertex`),n=Xo(i,S,`fragment`);N(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):M(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Wo(i,h),T=is(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,37297)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ko++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}let Es=0;var Ds=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Os(e),t.set(e,n)),n}},Os=class{constructor(e){this.id=Es++,this.code=e,this.usedTimes=0}};function ks(e,t,n,r,i,a){let o=new Xe,s=new Ds,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h){let g=u.fog,_=h.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=b&&b.mapping===306?b.image.height:null,S=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&M(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(S){let e=ta[S];E=e.vertexShader,D=e.fragmentShader}else E=i.vertexShader,D=i.fragmentShader,s.update(i),O=s.getVertexShaderID(i),k=s.getFragmentShaderID(i);let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),A=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ie=!!i.map,ae=!!i.matcap,oe=!!b,se=!!i.aoMap,j=!!i.lightMap,ce=!!i.bumpMap,le=!!i.normalMap,N=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,P=i.clearcoat>0,me=i.dispersion>0,he=i.iridescence>0,ge=i.sheen>0,F=i.transmission>0,_e=pe&&!!i.anisotropyMap,ve=P&&!!i.clearcoatMap,ye=P&&!!i.clearcoatNormalMap,I=P&&!!i.clearcoatRoughnessMap,L=he&&!!i.iridescenceMap,be=he&&!!i.iridescenceThicknessMap,R=ge&&!!i.sheenColorMap,xe=ge&&!!i.sheenRoughnessMap,Se=!!i.specularMap,z=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=F&&!!i.transmissionMap,Te=F&&!!i.thicknessMap,Ee=!!i.gradientMap,Oe=!!i.alphaMap,ke=i.alphaTest>0,Ae=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:S,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:A,instancingColor:A&&h.instanceColor!==null,instancingMorph:A&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ee,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:ae,envMap:oe,envMapMode:oe&&b.mapping,envMapCubeUVHeight:x,aoMap:se,lightMap:j,bumpMap:ce,normalMap:le,displacementMap:N,emissiveMap:ue,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:_e,clearcoat:P,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:I,dispersion:me,iridescence:he,iridescenceMap:L,iridescenceThicknessMap:be,sheen:ge,sheenColorMap:R,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:z,specularIntensityMap:Ce,transmission:F,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:Ae,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:se&&m(i.aoMap.channel),lightMapUv:j&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:N&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:de&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:L&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:be&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:R&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(i.sheenRoughnessMap.channel),specularMapUv:Se&&m(i.specularMap.channel),specularColorMapUv:z&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:Oe&&m(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(le||pe),vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!_.attributes.uv&&(ie||Oe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&De.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&De.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ta[t];n=Yr.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ts(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function As(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function js(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ms(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ns(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||js),r.length>1&&r.sort(t||Ms),i.length>1&&i.sort(t||Ms)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ps(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ns,e.set(t,[i])):n>=r.length?(i=new Ns,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Fs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new R,color:new W};break;case`SpotLight`:n={position:new R,direction:new R,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=n,n}}}function Is(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Ls=0;function Rs(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function zs(e){let t=new Fs,n=Is(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new Ve,o=new Ve;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Rs);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Ls++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Bs(e){let t=new zs(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Vs(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Bs(e),t.set(n,[a])):r>=i.length?(a=new Bs(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}let Hs=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Us=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Ws=new Ve,Gs=new R,Ks=new R;function qs(e,t,n){let a=new mr,o=new L,s=new L,d=new Le,f=new ti,p=new ni,m={},g=n.maxTextureSize,_={0:1,1:0,2:2},y=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),b=y.clone();b.defines.HORIZONTAL_PASS=1;let x=new _n;x.setAttribute(`position`,new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new q(x,y),C=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let w=this.type;this.render=function(t,n,f){if(C.enabled===!1||C.autoUpdate===!1&&C.needsUpdate===!1||t.length===0)return;this.type===2&&(M(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let p=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),y=e.state;y.setBlending(0),y.buffers.depth.getReversed()===!0?y.buffers.color.setClear(0,0,0,0):y.buffers.color.setClear(1,1,1,1),y.buffers.depth.setTest(!0),y.setScissorTest(!1);let b=w!==this.type;b&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let p=0,m=t.length;p<m;p++){let m=t[p],_=m.shadow;if(_===void 0){M(`WebGLShadowMap:`,m,`has no shadow.`);continue}if(_.autoUpdate===!1&&_.needsUpdate===!1)continue;o.copy(_.mapSize);let x=_.getFrameExtents();o.multiply(x),s.copy(_.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(s.x=Math.floor(g/x.x),o.x=s.x*x.x,_.mapSize.x=s.x),o.y>g&&(s.y=Math.floor(g/x.y),o.y=s.y*x.y,_.mapSize.y=s.y));let S=e.state.buffers.depth.getReversed();if(_.camera._reversedDepth=S,_.map===null||b===!0){if(_.map!==null&&(_.map.depthTexture!==null&&(_.map.depthTexture.dispose(),_.map.depthTexture=null),_.map.dispose()),this.type===3){if(m.isPointLight){M(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}_.map=new ze(o.x,o.y,{format:v,type:u,minFilter:i,magFilter:i,generateMipmaps:!1}),_.map.texture.name=m.name+`.shadowMap`,_.map.depthTexture=new Lr(o.x,o.y,l),_.map.depthTexture.name=m.name+`.shadowMapDepth`,_.map.depthTexture.format=h,_.map.depthTexture.compareFunction=null,_.map.depthTexture.minFilter=r,_.map.depthTexture.magFilter=r}else m.isPointLight?(_.map=new Da(o.x),_.map.depthTexture=new Rr(o.x,c)):(_.map=new ze(o.x,o.y),_.map.depthTexture=new Lr(o.x,o.y,c)),_.map.depthTexture.name=m.name+`.shadowMap`,_.map.depthTexture.format=h,this.type===1?(_.map.depthTexture.compareFunction=S?518:515,_.map.depthTexture.minFilter=i,_.map.depthTexture.magFilter=i):(_.map.depthTexture.compareFunction=null,_.map.depthTexture.minFilter=r,_.map.depthTexture.magFilter=r);_.camera.updateProjectionMatrix()}let C=_.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<C;t++){if(_.map.isWebGLCubeRenderTarget)e.setRenderTarget(_.map,t),e.clear();else{t===0&&(e.setRenderTarget(_.map),e.clear());let n=_.getViewport(t);d.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),y.viewport(d)}if(m.isPointLight){let e=_.camera,n=_.matrix,r=m.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Gs.setFromMatrixPosition(m.matrixWorld),e.position.copy(Gs),Ks.copy(e.position),Ks.add(Hs[t]),e.up.copy(Us[t]),e.lookAt(Ks),e.updateMatrixWorld(),n.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Ws.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),_._frustum.setFromProjectionMatrix(Ws,e.coordinateSystem,e.reversedDepth)}else _.updateMatrices(m);a=_.getFrustum(),D(n,f,_.camera,m,this.type)}_.isPointLightShadow!==!0&&this.type===3&&T(_,f),_.needsUpdate=!1}w=this.type,C.needsUpdate=!1,e.setRenderTarget(p,m,_)};function T(n,r){let i=t.update(S);y.defines.VSM_SAMPLES!==n.blurSamples&&(y.defines.VSM_SAMPLES=n.blurSamples,b.defines.VSM_SAMPLES=n.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new ze(o.x,o.y,{format:v,type:u})),y.uniforms.shadow_pass.value=n.map.depthTexture,y.uniforms.resolution.value=n.mapSize,y.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,y,S,null),b.uniforms.shadow_pass.value=n.mapPass.texture,b.uniforms.resolution.value=n.mapSize,b.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,b,S,null)}function E(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?p:f,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=m[e];r===void 0&&(r={},m[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,O)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?_[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function D(n,r,i,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||a.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,n.matrixWorld);let a=t.update(n),c=n.material;if(Array.isArray(c)){let t=a.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=E(n,d,o,s);n.onBeforeShadow(e,n,r,i,a,t,u),e.renderBufferDirect(i,null,a,t,n,u),n.onAfterShadow(e,n,r,i,a,t,u)}}}else if(c.visible){let t=E(n,c,o,s);n.onBeforeShadow(e,n,r,i,a,t,null),e.renderBufferDirect(i,null,a,t,n,null),n.onAfterShadow(e,n,r,i,a,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)D(c[e],r,i,o,s)}function O(e){e.target.removeEventListener(`dispose`,O);for(let t in m){let n=m[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Js(e,t){function n(){let t=!1,n=new Le,r=null,i=new Le(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=fe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new W(0,0,0),w=0,T=!1,E=null,D=null,O=null,ee=null,k=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,A=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=A>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),j=new Le().fromArray(oe),ce=new Le().fromArray(se);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let M={};M[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),M[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),M[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),M[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),ue(e.CULL_FACE),F(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return d[t]===n?!1:(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function P(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return m===t?!1:(e.useProgram(t),m=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function F(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(de(e.BLEND),h=!1);return}if(h===!1&&(ue(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:N(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:N(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:N(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:N(`WebGLState: Invalid blending: `,t);break}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(he[n],he[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function _e(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?F(0):F(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),L(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function ye(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function I(t){t!==O&&(ne&&e.lineWidth(t),O=t)}function L(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(ee!==n||k!==r)&&(ee=n,k=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function be(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function R(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function xe(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||M[t]),i.type=t,i.texture=n)}function Se(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function z(){try{e.compressedTexImage2D(...arguments)}catch(e){N(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){N(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){N(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){N(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){N(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){N(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){N(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){N(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){N(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){N(`WebGLState:`,e)}}function Me(t){j.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),j.copy(t))}function Ne(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function B(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},ie=null,ae={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new W(0,0,0),w=0,T=!1,E=null,D=null,O=null,ee=null,k=null,j.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:pe,drawBuffers:P,useProgram:me,setBlending:F,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:I,setPolygonOffset:L,setScissorTest:be,activeTexture:R,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:z,compressedTexImage3D:Ce,texImage2D:Ae,texImage3D:je,updateUBOMapping:Pe,uniformBlockBinding:B,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Me,viewport:Ne,reset:Fe}}function Ys(o,s,c,l,u,d,f){let p=s.has(`WEBGL_multisampled_render_to_texture`)?s.get(`WEBGL_multisampled_render_to_texture`):null,m=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),h=new L,_=new WeakMap,v,y=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function x(e,t){return b?new OffscreenCanvas(e,t):oe(`canvas`)}function S(e,t,n){let r=1,i=je(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);v===void 0&&(v=x(n,a));let o=t?x(n,a):v;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),M(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&M(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function C(e){return e.generateMipmaps}function w(e){o.generateMipmap(e)}function T(e){return e.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?o.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function E(e,t,n,r,i=!1){if(e!==null){if(o[e]!==void 0)return o[e];M(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===o.RED&&(n===o.FLOAT&&(a=o.R32F),n===o.HALF_FLOAT&&(a=o.R16F),n===o.UNSIGNED_BYTE&&(a=o.R8)),t===o.RED_INTEGER&&(n===o.UNSIGNED_BYTE&&(a=o.R8UI),n===o.UNSIGNED_SHORT&&(a=o.R16UI),n===o.UNSIGNED_INT&&(a=o.R32UI),n===o.BYTE&&(a=o.R8I),n===o.SHORT&&(a=o.R16I),n===o.INT&&(a=o.R32I)),t===o.RG&&(n===o.FLOAT&&(a=o.RG32F),n===o.HALF_FLOAT&&(a=o.RG16F),n===o.UNSIGNED_BYTE&&(a=o.RG8)),t===o.RG_INTEGER&&(n===o.UNSIGNED_BYTE&&(a=o.RG8UI),n===o.UNSIGNED_SHORT&&(a=o.RG16UI),n===o.UNSIGNED_INT&&(a=o.RG32UI),n===o.BYTE&&(a=o.RG8I),n===o.SHORT&&(a=o.RG16I),n===o.INT&&(a=o.RG32I)),t===o.RGB_INTEGER&&(n===o.UNSIGNED_BYTE&&(a=o.RGB8UI),n===o.UNSIGNED_SHORT&&(a=o.RGB16UI),n===o.UNSIGNED_INT&&(a=o.RGB32UI),n===o.BYTE&&(a=o.RGB8I),n===o.SHORT&&(a=o.RGB16I),n===o.INT&&(a=o.RGB32I)),t===o.RGBA_INTEGER&&(n===o.UNSIGNED_BYTE&&(a=o.RGBA8UI),n===o.UNSIGNED_SHORT&&(a=o.RGBA16UI),n===o.UNSIGNED_INT&&(a=o.RGBA32UI),n===o.BYTE&&(a=o.RGBA8I),n===o.SHORT&&(a=o.RGBA16I),n===o.INT&&(a=o.RGBA32I)),t===o.RGB&&(n===o.UNSIGNED_INT_5_9_9_9_REV&&(a=o.RGB9_E5),n===o.UNSIGNED_INT_10F_11F_11F_REV&&(a=o.R11F_G11F_B10F)),t===o.RGBA){let e=i?k:De.getTransfer(r);n===o.FLOAT&&(a=o.RGBA32F),n===o.HALF_FLOAT&&(a=o.RGBA16F),n===o.UNSIGNED_BYTE&&(a=e===`srgb`?o.SRGB8_ALPHA8:o.RGBA8),n===o.UNSIGNED_SHORT_4_4_4_4&&(a=o.RGBA4),n===o.UNSIGNED_SHORT_5_5_5_1&&(a=o.RGB5_A1)}return(a===o.R16F||a===o.R32F||a===o.RG16F||a===o.RG32F||a===o.RGBA16F||a===o.RGBA32F)&&s.get(`EXT_color_buffer_float`),a}function D(e,t){let n;return e?t===null||t===1014||t===1020?n=o.DEPTH24_STENCIL8:t===1015?n=o.DEPTH32F_STENCIL8:t===1012&&(n=o.DEPTH24_STENCIL8,M(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=o.DEPTH_COMPONENT24:t===1015?n=o.DEPTH_COMPONENT32F:t===1012&&(n=o.DEPTH_COMPONENT16),n}function O(e,t){return C(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),ne(t),t.isVideoTexture&&_.delete(t)}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),re(t)}function ne(e){let t=l.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=y.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&A(e),Object.keys(r).length===0&&y.delete(n)}l.remove(e)}function A(e){let t=l.get(e);o.deleteTexture(t.__webglTexture);let n=e.source,r=y.get(n);delete r[t.__cacheKey],f.memory.textures--}function re(e){let t=l.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),l.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)o.deleteFramebuffer(t.__webglFramebuffer[e][n]);else o.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&o.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)o.deleteFramebuffer(t.__webglFramebuffer[e]);else o.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&o.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&o.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&o.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&o.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=l.get(n[e]);t.__webglTexture&&(o.deleteTexture(t.__webglTexture),f.memory.textures--),l.remove(n[e])}l.remove(e)}let ie=0;function ae(){ie=0}function se(){let e=ie;return e>=u.maxTextures&&M(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+u.maxTextures),ie+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ce(e,t){let n=l.get(e);if(e.isVideoTexture&&ke(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)M(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)M(`WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);c.bindTexture(o.TEXTURE_2D,n.__webglTexture,o.TEXTURE0+t)}function le(e,t){let n=l.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){_e(n,e,t);return}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);c.bindTexture(o.TEXTURE_2D_ARRAY,n.__webglTexture,o.TEXTURE0+t)}function ue(e,t){let n=l.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){_e(n,e,t);return}c.bindTexture(o.TEXTURE_3D,n.__webglTexture,o.TEXTURE0+t)}function de(e,t){let n=l.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){ve(n,e,t);return}c.bindTexture(o.TEXTURE_CUBE_MAP,n.__webglTexture,o.TEXTURE0+t)}let fe={[e]:o.REPEAT,[t]:o.CLAMP_TO_EDGE,[n]:o.MIRRORED_REPEAT},pe={[r]:o.NEAREST,1004:o.NEAREST_MIPMAP_NEAREST,1005:o.NEAREST_MIPMAP_LINEAR,[i]:o.LINEAR,1007:o.LINEAR_MIPMAP_NEAREST,[a]:o.LINEAR_MIPMAP_LINEAR},P={512:o.NEVER,519:o.ALWAYS,513:o.LESS,515:o.LEQUAL,514:o.EQUAL,518:o.GEQUAL,516:o.GREATER,517:o.NOTEQUAL};function me(e,t){if(t.type===1015&&s.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&M(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),o.texParameteri(e,o.TEXTURE_WRAP_S,fe[t.wrapS]),o.texParameteri(e,o.TEXTURE_WRAP_T,fe[t.wrapT]),(e===o.TEXTURE_3D||e===o.TEXTURE_2D_ARRAY)&&o.texParameteri(e,o.TEXTURE_WRAP_R,fe[t.wrapR]),o.texParameteri(e,o.TEXTURE_MAG_FILTER,pe[t.magFilter]),o.texParameteri(e,o.TEXTURE_MIN_FILTER,pe[t.minFilter]),t.compareFunction&&(o.texParameteri(e,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(e,o.TEXTURE_COMPARE_FUNC,P[t.compareFunction])),s.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&s.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||l.get(t).__currentAnisotropy){let n=s.get(`EXT_texture_filter_anisotropic`);o.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,u.getMaxAnisotropy())),l.get(t).__currentAnisotropy=t.anisotropy}}}function he(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ee));let r=t.source,i=y.get(r);i===void 0&&(i={},y.set(r,i));let a=j(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&A(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ge(e,t,n){return Math.floor(Math.floor(e/n)/t)}function F(e,t,n,r){let i=e.updateRanges;if(i.length===0)c.texSubImage2D(o.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ge(r.start,t.width,4),c=ge(n.start,t.width,4);r.start<=o+1&&s===c&&ge(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let s=o.getParameter(o.UNPACK_ROW_LENGTH),l=o.getParameter(o.UNPACK_SKIP_PIXELS),u=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],s=Math.floor(a.start/4),l=Math.ceil(a.count/4),u=s%t.width,d=Math.floor(s/t.width),f=l;o.pixelStorei(o.UNPACK_SKIP_PIXELS,u),o.pixelStorei(o.UNPACK_SKIP_ROWS,d),c.texSubImage2D(o.TEXTURE_2D,0,u,d,f,1,n,r,t.data)}e.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,s),o.pixelStorei(o.UNPACK_SKIP_PIXELS,l),o.pixelStorei(o.UNPACK_SKIP_ROWS,u)}}function _e(e,t,n){let r=o.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=o.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=o.TEXTURE_3D);let i=he(e,t),a=t.source;c.bindTexture(r,e.__webglTexture,o.TEXTURE0+n);let s=l.get(a);if(a.version!==s.__version||i===!0){c.activeTexture(o.TEXTURE0+n);let e=De.getPrimaries(De.workingColorSpace),l=t.colorSpace===``?null:De.getPrimaries(t.colorSpace),f=t.colorSpace===``||e===l?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,t.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,t.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=S(t.image,!1,u.maxTextureSize);p=Ae(t,p);let m=d.convert(t.format,t.colorSpace),h=d.convert(t.type),_=E(t.internalFormat,m,h,t.colorSpace,t.isVideoTexture);me(r,t);let v,y=t.mipmaps,b=t.isVideoTexture!==!0,x=s.__version===void 0||i===!0,T=a.dataReady,ee=O(t,p);if(t.isDepthTexture)_=D(t.format===g,t.type),x&&(b?c.texStorage2D(o.TEXTURE_2D,1,_,p.width,p.height):c.texImage2D(o.TEXTURE_2D,0,_,p.width,p.height,0,m,h,null));else if(t.isDataTexture)if(y.length>0){b&&x&&c.texStorage2D(o.TEXTURE_2D,ee,_,y[0].width,y[0].height);for(let e=0,t=y.length;e<t;e++)v=y[e],b?T&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,v.width,v.height,m,h,v.data):c.texImage2D(o.TEXTURE_2D,e,_,v.width,v.height,0,m,h,v.data);t.generateMipmaps=!1}else b?(x&&c.texStorage2D(o.TEXTURE_2D,ee,_,p.width,p.height),T&&F(t,p,m,h)):c.texImage2D(o.TEXTURE_2D,0,_,p.width,p.height,0,m,h,p.data);else if(t.isCompressedTexture)if(t.isCompressedArrayTexture){b&&x&&c.texStorage3D(o.TEXTURE_2D_ARRAY,ee,_,y[0].width,y[0].height,p.depth);for(let e=0,n=y.length;e<n;e++)if(v=y[e],t.format!==1023)if(m!==null)if(b){if(T)if(t.layerUpdates.size>0){let n=Zi(v.width,v.height,t.format,t.type);for(let r of t.layerUpdates){let t=v.data.subarray(r*n/v.data.BYTES_PER_ELEMENT,(r+1)*n/v.data.BYTES_PER_ELEMENT);c.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,e,0,0,r,v.width,v.height,1,m,t)}t.clearLayerUpdates()}else c.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,e,0,0,0,v.width,v.height,p.depth,m,v.data)}else c.compressedTexImage3D(o.TEXTURE_2D_ARRAY,e,_,v.width,v.height,p.depth,0,v.data,0,0);else M(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else b?T&&c.texSubImage3D(o.TEXTURE_2D_ARRAY,e,0,0,0,v.width,v.height,p.depth,m,h,v.data):c.texImage3D(o.TEXTURE_2D_ARRAY,e,_,v.width,v.height,p.depth,0,m,h,v.data)}else{b&&x&&c.texStorage2D(o.TEXTURE_2D,ee,_,y[0].width,y[0].height);for(let e=0,n=y.length;e<n;e++)v=y[e],t.format===1023?b?T&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,v.width,v.height,m,h,v.data):c.texImage2D(o.TEXTURE_2D,e,_,v.width,v.height,0,m,h,v.data):m===null?M(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?T&&c.compressedTexSubImage2D(o.TEXTURE_2D,e,0,0,v.width,v.height,m,v.data):c.compressedTexImage2D(o.TEXTURE_2D,e,_,v.width,v.height,0,v.data)}else if(t.isDataArrayTexture)if(b){if(x&&c.texStorage3D(o.TEXTURE_2D_ARRAY,ee,_,p.width,p.height,p.depth),T)if(t.layerUpdates.size>0){let e=Zi(p.width,p.height,t.format,t.type);for(let n of t.layerUpdates){let t=p.data.subarray(n*e/p.data.BYTES_PER_ELEMENT,(n+1)*e/p.data.BYTES_PER_ELEMENT);c.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,n,p.width,p.height,1,m,h,t)}t.clearLayerUpdates()}else c.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)}else c.texImage3D(o.TEXTURE_2D_ARRAY,0,_,p.width,p.height,p.depth,0,m,h,p.data);else if(t.isData3DTexture)b?(x&&c.texStorage3D(o.TEXTURE_3D,ee,_,p.width,p.height,p.depth),T&&c.texSubImage3D(o.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)):c.texImage3D(o.TEXTURE_3D,0,_,p.width,p.height,p.depth,0,m,h,p.data);else if(t.isFramebufferTexture){if(x)if(b)c.texStorage2D(o.TEXTURE_2D,ee,_,p.width,p.height);else{let e=p.width,t=p.height;for(let n=0;n<ee;n++)c.texImage2D(o.TEXTURE_2D,n,_,e,t,0,m,h,null),e>>=1,t>>=1}}else if(y.length>0){if(b&&x){let e=je(y[0]);c.texStorage2D(o.TEXTURE_2D,ee,_,e.width,e.height)}for(let e=0,t=y.length;e<t;e++)v=y[e],b?T&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,m,h,v):c.texImage2D(o.TEXTURE_2D,e,_,m,h,v);t.generateMipmaps=!1}else if(b){if(x){let e=je(p);c.texStorage2D(o.TEXTURE_2D,ee,_,e.width,e.height)}T&&c.texSubImage2D(o.TEXTURE_2D,0,0,0,m,h,p)}else c.texImage2D(o.TEXTURE_2D,0,_,m,h,p);C(t)&&w(r),s.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ve(e,t,n){if(t.image.length!==6)return;let r=he(e,t),i=t.source;c.bindTexture(o.TEXTURE_CUBE_MAP,e.__webglTexture,o.TEXTURE0+n);let a=l.get(i);if(i.version!==a.__version||r===!0){c.activeTexture(o.TEXTURE0+n);let e=De.getPrimaries(De.workingColorSpace),s=t.colorSpace===``?null:De.getPrimaries(t.colorSpace),l=t.colorSpace===``||e===s?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,t.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,t.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let f=t.isCompressedTexture||t.image[0].isCompressedTexture,p=t.image[0]&&t.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=S(t.image[e],!0,u.maxCubemapSize):m[e]=p?t.image[e].image:t.image[e],m[e]=Ae(t,m[e]);let h=m[0],g=d.convert(t.format,t.colorSpace),_=d.convert(t.type),v=E(t.internalFormat,g,_,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,T=O(t,h);me(o.TEXTURE_CUBE_MAP,t);let D;if(f){y&&b&&c.texStorage2D(o.TEXTURE_CUBE_MAP,T,v,h.width,h.height);for(let e=0;e<6;e++){D=m[e].mipmaps;for(let n=0;n<D.length;n++){let r=D[n];t.format===1023?y?x&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?M(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&c.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):c.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(D=t.mipmaps,y&&b){D.length>0&&T++;let e=je(m[0]);c.texStorage2D(o.TEXTURE_CUBE_MAP,T,v,e.width,e.height)}for(let e=0;e<6;e++)if(p){y?x&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,m[e].width,m[e].height,g,_,m[e].data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,m[e].width,m[e].height,0,g,_,m[e].data);for(let t=0;t<D.length;t++){let n=D[t].image[e].image;y?x&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,m[e]):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,m[e]);for(let t=0;t<D.length;t++){let n=D[t];y?x&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}C(t)&&w(o.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ye(e,t,n,r,i,a){let s=d.convert(n.format,n.colorSpace),u=d.convert(n.type),f=E(n.internalFormat,s,u,n.colorSpace),m=l.get(t),h=l.get(n);if(h.__renderTarget=t,!m.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===o.TEXTURE_3D||i===o.TEXTURE_2D_ARRAY?c.texImage3D(i,a,f,e,n,t.depth,0,s,u,null):c.texImage2D(i,a,f,e,n,0,s,u,null)}c.bindFramebuffer(o.FRAMEBUFFER,e),Oe(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,r,i,h.__webglTexture,0,Ee(t)):(i===o.TEXTURE_2D||i>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,r,i,h.__webglTexture,a),c.bindFramebuffer(o.FRAMEBUFFER,null)}function I(e,t,n){if(o.bindRenderbuffer(o.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=D(t.stencilBuffer,i),s=t.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Oe(t)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ee(t),a,t.width,t.height):n?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ee(t),a,t.width,t.height):o.renderbufferStorage(o.RENDERBUFFER,a,t.width,t.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,s,o.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=d.convert(i.format,i.colorSpace),s=d.convert(i.type),c=E(i.internalFormat,a,s,i.colorSpace);Oe(t)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ee(t),c,t.width,t.height):n?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ee(t),c,t.width,t.height):o.renderbufferStorage(o.RENDERBUFFER,c,t.width,t.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function be(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(c.bindFramebuffer(o.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let i=l.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,ee)),i.__webglTexture===void 0){i.__webglTexture=o.createTexture(),c.bindTexture(o.TEXTURE_CUBE_MAP,i.__webglTexture),me(o.TEXTURE_CUBE_MAP,t.depthTexture);let e=d.convert(t.depthTexture.format),n=d.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=o.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=o.DEPTH24_STENCIL8);for(let i=0;i<6;i++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else ce(t.depthTexture,0);let a=i.__webglTexture,s=Ee(t),u=r?o.TEXTURE_CUBE_MAP_POSITIVE_X+n:o.TEXTURE_2D,f=t.depthTexture.format===1027?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Oe(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,f,u,a,0,s):o.framebufferTexture2D(o.FRAMEBUFFER,f,u,a,0);else if(t.depthTexture.format===1027)Oe(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,f,u,a,0,s):o.framebufferTexture2D(o.FRAMEBUFFER,f,u,a,0);else throw Error(`Unknown depthTexture format`)}function R(e){let t=l.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer)if(n)for(let n=0;n<6;n++)be(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?be(t.__webglFramebuffer[0],e,0):be(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=o.createRenderbuffer(),I(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];o.bindRenderbuffer(o.RENDERBUFFER,i),o.framebufferRenderbuffer(o.FRAMEBUFFER,r,o.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer[0]):c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=o.createRenderbuffer(),I(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,r),o.framebufferRenderbuffer(o.FRAMEBUFFER,n,o.RENDERBUFFER,r)}}c.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(e,t,n){let r=l.get(e);t!==void 0&&ye(r.__webglFramebuffer,e,e.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),n!==void 0&&R(e)}function Se(e){let t=e.texture,n=l.get(e),r=l.get(t);e.addEventListener(`dispose`,te);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,s=i.length>1;if(s||(r.__webglTexture===void 0&&(r.__webglTexture=o.createTexture()),r.__version=t.version,f.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=o.createFramebuffer()}else n.__webglFramebuffer[e]=o.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=o.createFramebuffer()}else n.__webglFramebuffer=o.createFramebuffer();if(s)for(let e=0,t=i.length;e<t;e++){let t=l.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=o.createTexture(),f.memory.textures++)}if(e.samples>0&&Oe(e)===!1){n.__webglMultisampledFramebuffer=o.createFramebuffer(),n.__webglColorRenderbuffer=[],c.bindFramebuffer(o.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=d.convert(r.format,r.colorSpace),s=d.convert(r.type),c=E(r.internalFormat,a,s,r.colorSpace,e.isXRRenderTarget===!0),l=Ee(e);o.renderbufferStorageMultisample(o.RENDERBUFFER,l,c,e.width,e.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+t,o.RENDERBUFFER,n.__webglColorRenderbuffer[t])}o.bindRenderbuffer(o.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=o.createRenderbuffer(),I(n.__webglDepthRenderbuffer,e,!0)),c.bindFramebuffer(o.FRAMEBUFFER,null)}}if(a){c.bindTexture(o.TEXTURE_CUBE_MAP,r.__webglTexture),me(o.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)ye(n.__webglFramebuffer[r][i],e,t,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else ye(n.__webglFramebuffer[r],e,t,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);C(t)&&w(o.TEXTURE_CUBE_MAP),c.unbindTexture()}else if(s){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=l.get(r),s=o.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(s=e.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),c.bindTexture(s,a.__webglTexture),me(s,r),ye(n.__webglFramebuffer,e,r,o.COLOR_ATTACHMENT0+t,s,0),C(r)&&w(s)}c.unbindTexture()}else{let i=o.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),c.bindTexture(i,r.__webglTexture),me(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)ye(n.__webglFramebuffer[r],e,t,o.COLOR_ATTACHMENT0,i,r);else ye(n.__webglFramebuffer,e,t,o.COLOR_ATTACHMENT0,i,0);C(t)&&w(i),c.unbindTexture()}e.depthBuffer&&R(e)}function z(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(C(r)){let t=T(e),n=l.get(r).__webglTexture;c.bindTexture(t,n),w(t),c.unbindTexture()}}}let Ce=[],we=[];function Te(e){if(e.samples>0){if(Oe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=o.COLOR_BUFFER_BIT,a=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,s=l.get(e),u=t.length>1;if(u)for(let e=0;e<t.length;e++)c.bindFramebuffer(o.FRAMEBUFFER,s.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.RENDERBUFFER,null),c.bindFramebuffer(o.FRAMEBUFFER,s.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.TEXTURE_2D,null,0);c.bindFramebuffer(o.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let d=e.texture.mipmaps;d&&d.length>0?c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=o.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=o.STENCIL_BUFFER_BIT)),u){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,s.__webglColorRenderbuffer[c]);let e=l.get(t[c]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0)}o.blitFramebuffer(0,0,n,r,0,0,n,r,i,o.NEAREST),m===!0&&(Ce.length=0,we.length=0,Ce.push(o.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(Ce.push(a),we.push(a),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,we)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ce))}if(c.bindFramebuffer(o.READ_FRAMEBUFFER,null),c.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),u)for(let e=0;e<t.length;e++){c.bindFramebuffer(o.FRAMEBUFFER,s.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.RENDERBUFFER,s.__webglColorRenderbuffer[e]);let n=l.get(t[e]).__webglTexture;c.bindFramebuffer(o.FRAMEBUFFER,s.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.TEXTURE_2D,n,0)}c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&m){let t=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[t])}}}function Ee(e){return Math.min(u.maxSamples,e.samples)}function Oe(e){let t=l.get(e);return e.samples>0&&s.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function ke(e){let t=f.render.frame;_.get(e)!==t&&(_.set(e,t),e.update())}function Ae(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(De.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&M(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):N(`WebGLTextures: Unsupported texture color space:`,n)),t}function je(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(h.width=e.naturalWidth||e.width,h.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(h.width=e.displayWidth,h.height=e.displayHeight):(h.width=e.width,h.height=e.height),h}this.allocateTextureUnit=se,this.resetTextureUnits=ae,this.setTexture2D=ce,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return c.buffers.depth.getReversed()}}function Xs(e,t){function n(n,r=``){let i,a=De.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Zs=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qr({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new Hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qs=class extends pe{constructor(e,t){super();let n=this,r=null,i=1,a=null,s=`local-floor`,l=1,u=null,d=null,f=null,_=null,v=null,y=null,b=typeof XRWebGLBinding<`u`,x=new Zs,S={},C=t.getContextAttributes(),w=null,T=null,E=[],D=[],O=new L,ee=null,k=new Mi;k.viewport=new Le;let te=new Mi;te.viewport=new Le;let ne=[k,te],A=new Hi,re=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=E[e];return t===void 0&&(t=new ht,E[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=E[e];return t===void 0&&(t=new ht,E[e]=t),t.getGripSpace()},this.getHand=function(e){let t=E[e];return t===void 0&&(t=new ht,E[e]=t),t.getHandSpace()};function ae(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=E[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<E.length;e++){let t=D[e];t!==null&&(D[e]=null,E[e].disconnect(t))}re=null,ie=null,x.reset();for(let e in S)delete S[e];e.setRenderTarget(w),v=null,_=null,f=null,r=null,T=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&M(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&M(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return _===null?v:_},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(d){if(r=d,r!==null){if(w=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),C.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(O),b&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,s=null;C.depth&&(s=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=C.stencil?g:h,a=C.stencil?p:c);let l={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:i};f=this.getBinding(),_=f.createProjectionLayer(l),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),T=new ze(_.textureWidth,_.textureHeight,{format:m,type:o,depthTexture:new Lr(_.textureWidth,_.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{let n={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:i};v=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),T=new ze(v.framebufferWidth,v.framebufferHeight,{format:m,type:o,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(s),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,E[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<E.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=E[r];i&&i.connect(n)}}let j=new R,ce=new R;function le(e,t,n){j.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=j.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function N(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;x.texture!==null&&(x.depthNear>0&&(t=x.depthNear),x.depthFar>0&&(n=x.depthFar)),A.near=te.near=k.near=t,A.far=te.far=k.far=n,(re!==A.near||ie!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),re=A.near,ie=A.far),A.layers.mask=e.layers.mask|6,k.layers.mask=A.layers.mask&-5,te.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;N(A,i);for(let e=0;e<a.length;e++)N(a[e],i);a.length===2?le(A,k,te):A.projectionMatrix.copy(k.projectionMatrix),ue(e,A,i)};function ue(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=he*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&v===null))return l},this.setFoveation=function(e){l=e,_!==null&&(_.fixedFoveation=e),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=e)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(A)},this.getCameraTexture=function(e){return S[e]};let de=null;function fe(t,i){if(d=i.getViewerPose(u||a),y=i,d!==null){let t=d.views;v!==null&&(e.setRenderTargetFramebuffer(T,v.framebuffer),e.setRenderTarget(T));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(v!==null)a=v.getViewport(r);else{let t=f.getViewSubImage(_,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(T,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(T))}let o=ne[n];o===void 0&&(o=new Mi,o.layers.enable(n),o.viewport=new Le,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&b){f=n.getBinding();let e=f.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&x.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&b){e.state.unbindTexture(),f=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=S[n];e||(e=new zr,S[n]=e);let t=f.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<E.length;e++){let t=D[e],n=E[e];t!==null&&n!==void 0&&n.update(t,i,u||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),y=null}let pe=new $i;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}};let $s=new Ye,ec=new Ve;function tc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Jr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,$s.copy(o),$s.x*=-1,$s.y*=-1,$s.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),e.envMapRotation.value.setFromMatrix4(ec.makeRotationFromEuler($s)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function nc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return N(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?M(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):M(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}let rc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ic=null;function ac(){return ic===null&&(ic=new or(rc,16,16,v,u),ic.name=`DFG_LUT`,ic.minFilter=i,ic.magFilter=i,ic.wrapS=t,ic.wrapT=t,ic.generateMipmaps=!1,ic.needsUpdate=!0),ic}var oc=class{constructor(e={}){let{canvas:t=se(),context:n=null,depth:r=!0,stencil:i=!1,alpha:l=!1,antialias:m=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:v=`default`,failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1,outputBufferType:C=o}=e;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);w=n.getContextAttributes().alpha}else w=l;let T=C,E=new Set([b,y,_]),D=new Set([o,c,s,p,d,f]),k=new Uint32Array(4),te=new Int32Array(4),ne=null,A=null,ie=[],ae=[],oe=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,le=!1;this._outputColorSpace=O;let fe=0,pe=0,P=null,me=-1,he=null,ge=new Le,F=new Le,_e=null,ve=new W(0),ye=0,I=t.width,L=t.height,be=1,xe=null,Se=null,z=new Le(0,0,I,L),Ce=new Le(0,0,I,L),we=!1,Te=new mr,Ee=!1,Oe=!1,ke=new Ve,Ae=new R,je=new Le,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return P===null?be:1}let B=n;function Fe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:m,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:x};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r183`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),B===null){let t=`webgl2`;if(B=Fe(t,e),B===null)throw Fe(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw N(`WebGLRenderer: `+e.message),e}let Ie,Re,V,Be,H,U,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it;function at(){Ie=new ka(B),Ie.init(),nt=new Xs(B,Ie),Re=new ca(B,Ie,e,nt),V=new Js(B,Ie),Re.reversedDepthBuffer&&S&&V.buffers.depth.setReversed(!0),Be=new Ma(B),H=new As,U=new Ys(B,Ie,V,H,Re,nt,Be),He=new Oa(j),Ue=new ea(B),rt=new oa(B,Ue),We=new Aa(B,Ue,Be,rt),Ge=new Pa(B,We,Ue,rt,Be),$e=new Na(B,Re,U),Xe=new la(H),Ke=new ks(j,He,Ie,Re,rt,Xe),qe=new tc(j,H),Je=new Ps,Ye=new Vs(Ie),Qe=new aa(j,He,V,Ge,w,h),Ze=new qs(j,Ge,Re),it=new nc(B,Be,Re,V),et=new sa(B,Ie,Be),tt=new ja(B,Ie,Be),Be.programs=Ke.programs,j.capabilities=Re,j.extensions=Ie,j.properties=H,j.renderLists=Je,j.shadowMap=Ze,j.state=V,j.info=Be}at(),T!==1009&&(oe=new Ia(T,t.width,t.height,r,i));let ot=new Qs(j,B);this.xr=ot,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(I,L,!1))},this.getSize=function(e){return e.set(I,L)},this.setSize=function(e,n,r=!0){if(ot.isPresenting){M(`WebGLRenderer: Can't change size while VR device is presenting.`);return}I=e,L=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),oe!==null&&oe.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(I*be,L*be).floor()},this.setDrawingBufferSize=function(e,n,r){I=e,L=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(T===1009){console.error(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){console.warn(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}oe.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ge)},this.getViewport=function(e){return e.copy(z)},this.setViewport=function(e,t,n,r){e.isVector4?z.set(e.x,e.y,e.z,e.w):z.set(e,t,n,r),V.viewport(ge.copy(z).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),V.scissor(F.copy(Ce).multiplyScalar(be).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){V.setScissorTest(we=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=E.has(t)}if(e){let e=P.texture.type,t=D.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(k[0]=i,k[1]=a,k[2]=o,k[3]=r,B.clearBufferuiv(B.COLOR,0,k)):(te[0]=i,te[1]=a,te[2]=o,te[3]=r,B.clearBufferiv(B.COLOR,0,te))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Qe.dispose(),Je.dispose(),Ye.dispose(),H.dispose(),He.dispose(),Ge.dispose(),rt.dispose(),it.dispose(),Ke.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),ce(`WebGLRenderer: Context Lost.`),le=!0}function ct(){ce(`WebGLRenderer: Context Restored.`),le=!1;let e=Be.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;at(),Be.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function lt(e){N(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),H.remove(e)}function ft(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Dt(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=Ue.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)ue(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,n),e.side=0,e.needsUpdate=!0,wt(e,t,n),e.side=2):wt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),A=Ye.get(n),A.init(t),ae.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];pt(a,n,e),r.add(a)}else pt(t,n,e),r.add(t)}),A=ae.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){H.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new $i;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,ot.setAnimationLoop(e),e===null?vt.stop():vt.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){N(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(le===!0)return;let n=ot.enabled===!0&&ot.isPresenting===!0,r=oe!==null&&(P===null||n)&&oe.begin(j,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(oe===null||oe.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,P),A=Ye.get(e,ae.length),A.init(t),ae.push(A),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(ke,re,t.reversedDepth),Oe=this.localClippingEnabled,Ee=Xe.init(this.clippingPlanes,Oe),ne=Je.get(e,ie.length),ne.init(),ie.push(ne),ot.enabled===!0&&ot.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,j.sortObjects)}yt(e,t,0,j.sortObjects),ne.finish(),j.sortObjects===!0&&ne.sort(xe,Se),Ne=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ne&&Qe.addToRenderList(ne,e),this.info.render.frame++,Ee===!0&&Xe.beginShadows();let i=A.state.shadowsArray;if(Ze.render(i,e,t),Ee===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&oe.hasRenderPass())===!1){let n=ne.opaque,r=ne.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Ne&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(ne,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Ne&&Qe.render(e),bt(ne,e,t)}P!==null&&pe===0&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),r&&oe.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),rt.resetDefaultState(),me=-1,he=null,ae.pop(),ae.length>0?(A=ae[ae.length-1],Ee===!0&&Xe.setGlobalState(j.clippingPlanes,A.state.camera)):A=null,ie.pop(),ne=ie.length>0?ie[ie.length-1]:null};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Te.intersectsSprite(e)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let t=Ge.update(e),i=e.material;i.visible&&ne.push(e,t,i,n,je.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Te.intersectsObject(e))){let t=Ge.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),je.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&ne.push(e,t,s,n,je.z,o)}}else i.visible&&ne.push(e,t,i,n,je.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),Ee===!0&&Xe.setGlobalState(j.clippingPlanes,n),r&&V.viewport(ge.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new ze(1,1,{generateMipmaps:!0,type:e?u:o,minFilter:a,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}let s=A.state.transmissionRenderTarget[r.id],c=r.viewport||ge;s.setSize(c.z*j.transmissionResolutionScale,c.w*j.transmissionResolutionScale);let l=j.getRenderTarget(),d=j.getActiveCubeFace(),f=j.getActiveMipmapLevel();j.setRenderTarget(s),j.getClearColor(ve),ye=j.getClearAlpha(),ye<1&&j.setClearColor(16777215,.5),j.clear(),Ne&&Qe.render(n);let p=j.toneMapping;j.toneMapping=0;let m=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),Ee===!0&&Xe.setGlobalState(j.clippingPlanes,r),St(e,n,r),U.updateMultisampleRenderTarget(s),U.updateRenderTargetMipmap(s),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(U.updateMultisampleRenderTarget(s),U.updateRenderTargetMipmap(s))}j.setRenderTarget(l,d,f),j.setClearColor(ve,ye),m!==void 0&&(r.viewport=m),j.toneMapping=p}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=Me);let r=H.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=Ke.getUniforms(e),e.onBeforeCompile(s,j),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Et(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Wo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=Me),U.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?j.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ee,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=H.get(r),y=A.state.lights;if(Ee===!0&&(Oe===!0||e!==he)){let t=e===he&&r.id===me;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h?v.morphTargetsCount!==_&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(V.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==me&&(me=r.id,C=!0),S||he!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(B,`projectionMatrix`,e.projectionMatrix),T.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(B,Ae.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),he!==e&&(he=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,U),y.state.spotShadowMap.length>0&&T.setValue(B,`spotShadowMap`,y.state.spotShadowMap,U),y.state.pointShadowMap.length>0&&T.setValue(B,`pointShadowMap`,y.state.pointShadowMap,U)),i.isSkinnedMesh){T.setOptional(B,i,`bindMatrix`),T.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(B,`boneTexture`,e.boneTexture,U))}i.isBatchedMesh&&(T.setOptional(B,i,`batchingTexture`),T.setValue(B,`batchingTexture`,i._matricesTexture,U),T.setOptional(B,i,`batchingIdTexture`),T.setValue(B,`batchingIdTexture`,i._indirectTexture,U),T.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(B,`batchingColorTexture`,i._colorsTexture,U));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=ac()),C&&(T.setValue(B,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Ot(E,w),a&&r.fog===!0&&qe.refreshFogUniforms(E,a),qe.refreshMaterialUniforms(E,r,be,L,A.state.transmissionRenderTarget[e.id]),Wo.upload(B,Tt(v),E,U)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Wo.upload(B,Tt(v),E,U),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(B,`center`,i.center),T.setValue(B,`modelViewMatrix`,i.modelViewMatrix),T.setValue(B,`normalMatrix`,i.normalMatrix),T.setValue(B,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let At=B.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){P=e,fe=t,pe=n;let r=null,i=!1,a=!1;if(e){let o=H.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),ge.copy(e.viewport),F.copy(e.scissor),_e=e.scissorTest,V.viewport(ge),V.scissor(F),V.setScissorTest(_e),me=-1;return}else if(o.__webglFramebuffer===void 0)U.setupRenderTarget(e);else if(o.__hasExternalTextures)U.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);U.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&U.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ge.copy(e.viewport),F.copy(e.scissor),_e=e.scissorTest}else ge.copy(z).multiplyScalar(be).floor(),F.copy(Ce).multiplyScalar(be).floor(),_e=we;if(n!==0&&(r=At),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(ge),V.scissor(F),V.setScissorTest(_e),i){let r=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}me=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){N(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(c)){N(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Re.textureTypeReadable(l)){N(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=P===null?null:H.get(P).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Re.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,d),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0);let f=P===null?null:H.get(P).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,f);let p=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await de(B,p,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,d),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.deleteBuffer(d),B.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;U.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()};let jt=B.createFramebuffer(),Mt=B.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(U.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(U.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(U.setTexture2D(t,0),v=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(B.UNPACK_ROW_LENGTH),b=B.getParameter(B.UNPACK_IMAGE_HEIGHT),x=B.getParameter(B.UNPACK_SKIP_PIXELS),S=B.getParameter(B.UNPACK_SKIP_ROWS),C=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,l),B.pixelStorei(B.UNPACK_SKIP_ROWS,u),B.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,jt),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,Mt);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(B.UNPACK_ROW_LENGTH,y),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(B.UNPACK_SKIP_PIXELS,x),B.pixelStorei(B.UNPACK_SKIP_ROWS,S),B.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&U.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?U.setTextureCube(e,0):e.isData3DTexture?U.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?U.setTexture2DArray(e,0):U.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){fe=0,pe=0,P=null,V.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return re}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),t.unpackColorSpace=De._getUnpackColorSpace()}},sc=class{constructor(e){this.keys=new Set,this.mouseDeltaX=0,this.mouseDeltaY=0,this.mouseLeftPressed=!1,this.mouseRightPressed=!1,this._rawDeltaX=0,this._rawDeltaY=0,this._rawMouseLeft=!1,this._rawMouseRight=!1,this._pointerLocked=!1,window.addEventListener(`keydown`,e=>{document.activeElement instanceof HTMLInputElement||(this.keys.add(e.code),e.preventDefault())}),window.addEventListener(`keyup`,e=>{this.keys.delete(e.code)}),e.addEventListener(`click`,()=>{e.requestPointerLock()}),window.addEventListener(`mousedown`,e=>{this._pointerLocked&&(e.button===0&&(this._rawMouseLeft=!0),e.button===2&&(this._rawMouseRight=!0))}),window.addEventListener(`contextmenu`,e=>e.preventDefault()),document.addEventListener(`pointerlockchange`,()=>{this._pointerLocked=document.pointerLockElement===e}),document.addEventListener(`mousemove`,e=>{this._pointerLocked&&(this._rawDeltaX+=e.movementX,this._rawDeltaY+=e.movementY)})}flush(){this.mouseDeltaX=this._rawDeltaX,this.mouseDeltaY=this._rawDeltaY,this.mouseLeftPressed=this._rawMouseLeft,this.mouseRightPressed=this._rawMouseRight,this._rawDeltaX=0,this._rawDeltaY=0,this._rawMouseLeft=!1,this._rawMouseRight=!1}isDown(e){return this.keys.has(e)}get pointerLocked(){return this._pointerLocked}};function cc(){let e=document.createElement(`canvas`);e.width=128,e.height=64;let t=e.getContext(`2d`);t.fillStyle=`rgba(255, 40, 0, 0.85)`,t.beginPath(),t.roundRect(4,4,e.width-8,e.height-8,8),t.fill(),t.fillStyle=`#ffffff`,t.font=`bold 36px Arial`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`IT`,e.width/2,e.height/2);let n=new Ln(new Cn({map:new Ir(e),transparent:!0,depthTest:!1}));return n.scale.set(1.2,.6,1),n}let lc=-28;function uc(e){lc=e}let dc=16758928,fc=3359863,pc=2232576;function mc(e,t=.88,n=0){return new ei({color:e,roughness:t,metalness:n})}function hc(e){let t=new pt,n=[];function r(e,t,r,i=.88,a=!1){let o=new q(e,mc(t,i));return o.castShadow=!0,r.add(o),a&&n.push(o),o}let i=(e,t,n,i,a,o=.88,s=!1)=>r(new J(e,t,n),i,a,o,s),a=(e,t,n,i=.88)=>r(new Ur(e,8,6),t,n,i);a(.185,dc,t,.82).position.set(0,1.62,0),a(.032,1118498,t,.5).position.set(-.075,1.645,-.175),a(.032,1118498,t,.5).position.set(.075,1.645,-.175),((e,t,n,i)=>r(new Br(e,e,t,8),n,i))(.065,.1,dc,t).position.set(0,1.455,0),i(.46,.52,.25,e,t,.9,!0).position.set(0,1.14,0),i(.42,.16,.23,fc,t).position.set(0,.82,0);let o=new pt;o.position.set(-.3,1.19,0),t.add(o),i(.14,.3,.15,e,o,.9,!0).position.set(0,-.15,0),i(.12,.28,.13,dc,o,.82).position.set(0,-.46,0);let s=new pt;s.position.set(.3,1.19,0),t.add(s),i(.14,.3,.15,e,s,.9,!0).position.set(0,-.15,0),i(.12,.28,.13,dc,s,.82).position.set(0,-.46,0);let c=new pt;c.position.set(-.12,.73,0),t.add(c),i(.165,.35,.165,fc,c).position.set(0,-.175,0),i(.145,.31,.145,fc,c).position.set(0,-.505,0),i(.175,.07,.26,pc,c,.65).position.set(0,-.695,.05);let l=new pt;return l.position.set(.12,.73,0),t.add(l),i(.165,.35,.165,fc,l).position.set(0,-.175,0),i(.145,.31,.145,fc,l).position.set(0,-.505,0),i(.175,.07,.26,pc,l,.65).position.set(0,-.695,.05),{group:t,shirtMeshes:n,limbs:{leftArm:o,rightArm:s,leftLeg:c,rightLeg:l}}}function gc(e,t){for(let n of e.shirtMeshes)n.material.color.set(t)}function _c(e,t,n,r,i,a){let{leftArm:o,rightArm:s,leftLeg:c,rightLeg:l}=e.limbs,u=performance.now()*.001,d=1-Math.exp(-13*a),f=1-Math.exp(-8*a);function p(e,t,n){return e+(t-e)*n}if(n){o.rotation.x=p(o.rotation.x,-.55,d),s.rotation.x=p(s.rotation.x,-.55,d),c.rotation.x=p(c.rotation.x,.3,d),l.rotation.x=p(l.rotation.x,-.12,d),e.group.rotation.x=p(e.group.rotation.x,0,f),e.group.position.x=p(e.group.position.x,0,f),e.group.position.y=p(e.group.position.y,0,f);return}let m=Math.min(i/3,1),h=Math.sin(t)*(r?.78:.55)*m;o.rotation.x=p(o.rotation.x,h,d),s.rotation.x=p(s.rotation.x,-h,d),c.rotation.x=p(c.rotation.x,-h,d),l.rotation.x=p(l.rotation.x,h,d);let g=r?m*.1:0;e.group.rotation.x=p(e.group.rotation.x,g,f);let _=Math.sin(t+Math.PI/2)*.028*m;e.group.position.x=p(e.group.position.x,_,f);let v=(r?.055:.038)*m,y=Math.abs(Math.sin(t*2))*v,b=m<.08?Math.sin(u*1.15)*.007:0;e.group.position.y=p(e.group.position.y,y+b,f)}let vc=2254574,yc=14487808,bc=1.8,xc=.4;var Sc=class{get stamina(){return this._stamina}get maxStamina(){return 3}get isSprinting(){return this._sprinting}get isExhausted(){return this._exhausted}get isPouncing(){return this._pounceTimer>0}get pounceCooldown(){return this._pounceCooldown}pounce(e,t,n,r){if(this._pounceCooldown>0)return;let i=t??32,a=n??.32,o=r??4,s=new R(e.x,0,e.z).normalize();this.velocity.x=s.x*i,this.velocity.z=s.z*i,this.velocity.y=Math.max(this.velocity.y,7),this._pounceTimer=a,this._pounceCooldown=o,this.knockbackTimer=a}constructor(e){this.velocity=new R,this.onGround=!1,this.isIt=!1,this.tagImmunity=0,this.isFrozen=!1,this.isEliminated=!1,this.isHuman=!0,this.speedBoost=1,this.knockbackTimer=0,this.hp=100,this.lives=3,this.yaw=0,this.blockJump=!1,this._stamina=3,this._sprinting=!1,this._exhausted=!1,this._walkCycle=0,this._pounceCooldown=0,this._pounceTimer=0,this._nameSprite=null,this.mesh=new pt,this._humanoid=hc(vc),this.mesh.add(this._humanoid.group),this._itSprite=cc(),this._itSprite.position.set(0,bc+.7,0),this._itSprite.visible=!1,this.mesh.add(this._itSprite),e.add(this.mesh)}get position(){return this.mesh.position}setIt(e){e&&this.isFrozen&&this.setFrozen(!1),this.isIt=e,this._itSprite.visible=e,gc(this._humanoid,e?yc:vc),e?this.tagImmunity=0:this.tagImmunity=2}setFrozen(e){this.isFrozen=e,e?(gc(this._humanoid,8969727),this.velocity.x=0,this.velocity.z=0):gc(this._humanoid,this.isIt?yc:vc)}setEliminated(e){this.isEliminated=e,this.mesh.visible=!e,e&&this.setFrozen(!0)}setName(e){this._nameSprite&&(this.mesh.remove(this._nameSprite),this._nameSprite.material.map?.dispose(),this._nameSprite.material.dispose());let t=document.createElement(`canvas`);t.width=256,t.height=64;let n=t.getContext(`2d`);n.fillStyle=`rgba(0,0,0,0.55)`,n.beginPath(),n.roundRect(4,4,t.width-8,t.height-8,10),n.fill(),n.fillStyle=`#ffffff`,n.font=`bold 28px Arial`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,t.width/2,t.height/2),this._nameSprite=new Ln(new Cn({map:new Ir(t),transparent:!0,depthTest:!1})),this._nameSprite.scale.set(2.5,.6,1),this._nameSprite.position.set(0,bc+.45,0),this.mesh.add(this._nameSprite)}removeFromScene(e){e.remove(this.mesh)}update(e,t,n,r,i=22,a=0,o){if(this.isEliminated)return;if(this.tagImmunity>0&&(this.tagImmunity=Math.max(0,this.tagImmunity-e)),this._pounceCooldown>0&&(this._pounceCooldown=Math.max(0,this._pounceCooldown-e)),this._pounceTimer>0&&(this._pounceTimer=Math.max(0,this._pounceTimer-e)),this.isFrozen){this.velocity.x=0,this.velocity.z=0,this.velocity.y+=lc*e,this.mesh.position.addScaledVector(this.velocity,e),this.onGround=!1,this.mesh.position.y<=a&&(this.mesh.position.y=a,this.velocity.y=0,this.onGround=!0),this._resolvePlatforms(n,e),this._resolveWalls(r),_c(this._humanoid,this._walkCycle,!1,!1,0,e);let t=this.mesh.position;o!==void 0&&(Math.abs(t.x)>o||Math.abs(t.z)>o)&&this.setEliminated(!0);return}this.yaw-=t.mouseDeltaX*.002,this.mesh.rotation.y=this.yaw;let s=new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),c=new R(Math.cos(this.yaw),0,-Math.sin(this.yaw)),l=new R;if((t.isDown(`KeyW`)||t.isDown(`ArrowUp`))&&l.add(s),(t.isDown(`KeyS`)||t.isDown(`ArrowDown`))&&l.sub(s),(t.isDown(`KeyA`)||t.isDown(`ArrowLeft`))&&l.sub(c),(t.isDown(`KeyD`)||t.isDown(`ArrowRight`))&&l.add(c),l.lengthSq()>0&&l.normalize(),t.isDown(`ShiftLeft`)&&l.lengthSq()>0&&this._stamina>0&&!this._exhausted?(this._sprinting=!0,this._stamina=Math.max(0,this._stamina-e),this._stamina===0&&(this._exhausted=!0)):(this._sprinting=!1,this._stamina=Math.min(3,this._stamina+.45*e),this._exhausted&&this._stamina>=1.2&&(this._exhausted=!1)),this.knockbackTimer>0)this.knockbackTimer=Math.max(0,this.knockbackTimer-e);else{let e=this._sprinting?13.5:this._exhausted?5:8;this.velocity.x=l.x*e*this.speedBoost,this.velocity.z=l.z*e*this.speedBoost}!this.blockJump&&(t.isDown(`Space`)||t.isDown(`KeyE`))&&this.onGround&&(this.velocity.y=18,this.onGround=!1),this.velocity.y+=lc*e;let u=this.velocity.clone().multiplyScalar(e);this.mesh.position.add(u),this.onGround=!1,this.mesh.position.y<=a&&(this.mesh.position.y=a,this.velocity.y=0,this.onGround=!0),this._resolvePlatforms(n,e),this._resolveWalls(r);let d=this.mesh.position;if(o!==void 0&&(Math.abs(d.x)>o||Math.abs(d.z)>o)){this.setEliminated(!0);return}d.x>i&&(d.x=i,this.velocity.x=0),d.x<-i&&(d.x=-i,this.velocity.x=0),d.z>i&&(d.z=i,this.velocity.z=0),d.z<-i&&(d.z=-i,this.velocity.z=0),d.y<a-15&&(d.set(0,a+2,0),this.velocity.set(0,0,0));let f=Math.sqrt(this.velocity.x**2+this.velocity.z**2);this._walkCycle+=f*e*2.5,_c(this._humanoid,this._walkCycle,!this.onGround,this._sprinting,f,e)}_resolveWalls(e){let t=this.mesh.position;for(let n of e){if(t.y+bc<n.min.y||t.y>n.max.y)continue;let e=Math.max(n.min.x,Math.min(t.x,n.max.x)),r=Math.max(n.min.z,Math.min(t.z,n.max.z)),i=t.x-e,a=t.z-r,o=i*i+a*a;if(o<xc*xc){let e=Math.sqrt(o);if(e>0){let n=xc-e;t.x+=i/e*n,t.z+=a/e*n}else{let e=xc+(t.x<(n.min.x+n.max.x)/2?t.x-n.min.x:n.max.x-t.x);t.x+=e}}}}_resolvePlatforms(e,t){let n=this.mesh.position.clone();for(let r of e){let e=n.x>r.min.x-xc&&n.x<r.max.x+xc,i=n.z>r.min.z-xc&&n.z<r.max.z+xc;if(!e||!i)continue;let a=r.max.y;n.y-this.velocity.y*t>=a-.1&&n.y<=a+.5&&this.velocity.y<=0&&(this.mesh.position.y=a,this.velocity.y=0,this.onGround=!0)}}};let Cc=2.5,wc=1.55,Tc=-Math.PI*.45,Ec=Math.PI*.45;var Dc=class{constructor(){this.pitch=0,this.camera=new Mi(75,window.innerWidth/window.innerHeight,.05,500)}update(e,t,n){this.pitch-=n.mouseDeltaY*.002,this.pitch=Math.max(Tc,Math.min(Ec,this.pitch)),this.camera.position.set(e.x,e.y+wc,e.z);let r=new R(e.x-Math.sin(t)*Math.cos(this.pitch),e.y+wc+Math.sin(this.pitch),e.z-Math.cos(t)*Math.cos(this.pitch));this.camera.lookAt(r)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}},Oc=class{constructor(){this.pitch=.3,this.camera=new Mi(70,window.innerWidth/window.innerHeight,.1,1e3)}update(e,t,n){this.pitch+=n.mouseDeltaY*.002,this.pitch=Math.max(-.4,Math.min(1,this.pitch));let r=e.x+Math.sin(t)*Math.cos(this.pitch)*8,i=e.y+Cc+Math.sin(this.pitch)*8,a=e.z+Math.cos(t)*Math.cos(this.pitch)*8;this.camera.position.set(r,i,a),this.camera.lookAt(e.x,e.y+Cc*.6,e.z)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}};let kc=1.8,Ac=.4,jc=1.5,Mc=[16733491,3398997,16763904,13387007],Nc=0;function Pc(){Nc=0}var Fc=class{constructor(e,t,n=22){this.velocity=new R,this.yaw=Math.random()*Math.PI*2,this.onGround=!1,this.isIt=!1,this.tagImmunity=0,this.isFrozen=!1,this.isEliminated=!1,this.isHuman=!1,this.speedBoost=1,this.knockbackTimer=0,this.hp=100,this.lives=3,this._waypoint=new R,this._wpTimer=0,this._boundary=22,this._stuckTimer=0,this._prevPos=new R,this._target=null,this._fleeing=!1,this._walkCycle=0,this.name=t,this._boundary=n,this._baseColor=Mc[Nc%Mc.length],Nc++,this.mesh=new pt,this._humanoid=hc(this._baseColor),this.mesh.add(this._humanoid.group),this._itSprite=cc(),this._itSprite.position.set(0,kc+1.2,0),this._itSprite.visible=!1,this.mesh.add(this._itSprite);let r=this._makeNameSprite(t);r.position.set(0,kc+.55,0),this.mesh.add(r),this.mesh.position.set((Math.random()-.5)*20,2,(Math.random()-.5)*20),this._pickWaypoint(),e.add(this.mesh)}get position(){return this.mesh.position}setIt(e){e&&this.isFrozen&&this.setFrozen(!1),this.isIt=e,this._itSprite.visible=e,gc(this._humanoid,e?14487808:this._baseColor),this.tagImmunity=e?0:2}setFrozen(e){this.isFrozen=e,e?(gc(this._humanoid,8969727),this.velocity.x=0,this.velocity.z=0):gc(this._humanoid,this.isIt?14487808:this._baseColor)}setEliminated(e){this.isEliminated=e,this.mesh.visible=!e,e&&(this.velocity.set(0,0,0),this.isFrozen=!0)}removeFromScene(e){e.remove(this.mesh)}update(e,t,n,r,i,a=0,o){if(this.isEliminated)return;if(this.tagImmunity>0&&(this.tagImmunity=Math.max(0,this.tagImmunity-e)),this.isFrozen){this.velocity.x=0,this.velocity.z=0,this.velocity.y+=lc*e,this.mesh.position.addScaledVector(this.velocity,e);let r=this.mesh.position;r.y<=a&&(r.y=a,this.velocity.y=0,this.onGround=!0),this._resolvePlatforms(t,e),this._resolveWalls(n);return}this._wpTimer-=e;let s=this.mesh.position,c=7;if(this._fleeing=!1,this.isIt){let e=-1,t=null;for(let n of i){if(n===this||n.isIt||n.tagImmunity>0||n.isFrozen)continue;let r=new R().subVectors(n.position,s).setY(0),i=r.length();if(i<.01)continue;let a=n.velocity??new R,o=-r.dot(new R(a.x,0,a.z))/(i+.1),c=(1+Math.max(0,o)*.4)/(i+1);c>e&&(e=c,t=n)}if(t){this._target=t;let e=new R().subVectors(t.position,s).setY(0).length(),n=t.velocity??new R,r=Math.min(e/9,.7),i=new R(t.position.x+n.x*r*.65,t.position.y,t.position.z+n.z*r*.65);this._waypoint.copy(i),this._wpTimer=.25,c=9}else this._target=null,this._maybePickWaypoint()}else{let e=i.filter(e=>e!==this&&e.isIt);if(e.length>0){let n=1/0;for(let t of e)n=Math.min(n,s.distanceTo(t.position));if(n<14){c=8.5,this._fleeing=!0;let i=new R;for(let t of e){let e=new R().subVectors(s,t.position).setY(0),n=e.length();n>0&&i.addScaledVector(e.normalize(),1/(n+.1))}let a=this._boundary;s.x>a-8&&(i.x-=(s.x-(a-8))/8),s.x<-a+8&&(i.x+=(-a+8-s.x)/8),s.z>a-8&&(i.z-=(s.z-(a-8))/8),s.z<-a+8&&(i.z+=(-a+8-s.z)/8),i.lengthSq()>0&&i.normalize();let o=s.clone().addScaledVector(i,10);n<5?(this._waypoint.copy(o),this._wpTimer=.2,this._seekEscapeTeleporter(r)):this._wpTimer<=0&&(this._seekElevatedPlatform(t)||(this._waypoint.copy(o),this._wpTimer=.2))}else this._target=null,this._rescueFrozen(i)||this._maybePickWaypoint()}else this._target=null,this._rescueFrozen(i)||this._maybePickWaypoint()}let l=this._waypoint.x-s.x,u=this._waypoint.z-s.z,d=Math.sqrt(l*l+u*u);d>.1&&(this.yaw=Math.atan2(-l,-u),this.mesh.rotation.y=this.yaw);let f=new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw));if(this.knockbackTimer>0?this.knockbackTimer=Math.max(0,this.knockbackTimer-e):(this.velocity.x=f.x*c*this.speedBoost,this.velocity.z=f.z*c*this.speedBoost),this.onGround){let t=(this._target?this._target.position.y:this._waypoint.y)-s.y>.8;s.distanceTo(this._prevPos)<.05&&d>jc?this._stuckTimer+=e:this._stuckTimer=0;let n=this._fleeing?.15:.6,r=this._stuckTimer>n;(t||r)&&(this.velocity.y=18,this.onGround=!1,this._stuckTimer=0)}if(this._prevPos.copy(s),this.velocity.y+=lc*e,s.addScaledVector(this.velocity,e),this.onGround=!1,s.y<=a&&(s.y=a,this.velocity.y=0,this.onGround=!0),this._resolvePlatforms(t,e),this._resolveWalls(n),o!==void 0&&(Math.abs(s.x)>o||Math.abs(s.z)>o)){this.setEliminated(!0);return}let p=this._boundary;this.knockbackTimer<=0&&(s.x>p&&(s.x=p,this.velocity.x=0,this._pickWaypoint()),s.x<-p&&(s.x=-p,this.velocity.x=0,this._pickWaypoint()),s.z>p&&(s.z=p,this.velocity.z=0,this._pickWaypoint()),s.z<-p&&(s.z=-p,this.velocity.z=0,this._pickWaypoint())),s.y<a-15&&(s.set(0,a+2,0),this.velocity.set(0,0,0));let m=Math.sqrt(this.velocity.x**2+this.velocity.z**2);this._walkCycle+=m*e*2.5,_c(this._humanoid,this._walkCycle,!this.onGround,this.isIt,m,e);let h=new R(s.x,s.y+.1,s.z);for(let e of r)if(!(e.cooldown>0)&&e.trigger.containsPoint(h)){if(e.sabotaged&&!this.isIt){let t=i.find(e=>e.isIt);t?s.copy(t.position):s.copy(e.destination),e.sabotaged=!1,e.sabotageProgress=0,e.sprite.visible=!1}else s.copy(e.destination);this.velocity.set(0,0,0),e.cooldown=5,e.link&&(e.link.cooldown=5),this._pickWaypoint()}}_maybePickWaypoint(){let e=this._waypoint.x-this.mesh.position.x,t=this._waypoint.z-this.mesh.position.z;(Math.sqrt(e*e+t*t)<jc||this._wpTimer<=0)&&this._pickWaypoint()}_pickWaypoint(){let e=this._boundary-2;this._waypoint.set((Math.random()-.5)*e*2,0,(Math.random()-.5)*e*2),this._wpTimer=5}_rescueFrozen(e){let t=null,n=1/0;for(let r of e){if(r===this||!r.isFrozen||r.isIt)continue;let e=this.mesh.position.distanceTo(r.position);e<n&&(n=e,t=r)}return t?(this._waypoint.copy(t.position),this._wpTimer=1,!0):!1}_seekElevatedPlatform(e){let t=this.mesh.position,n=-1,r=0,i=0,a=0;for(let o of e){let e=o.max.y,s=e-t.y;if(s<.5||s>6.5)continue;let c=(o.min.x+o.max.x)/2,l=(o.min.z+o.max.z)/2,u=Math.sqrt((c-t.x)**2+(l-t.z)**2);if(u>9)continue;let d=s/(u+1);d>n&&(n=d,r=c,i=l,a=e)}return n>0?(this._waypoint.set(r,a,i),this._wpTimer=2,!0):!1}_seekEscapeTeleporter(e){let t=6,n=null;for(let r of e){if(r.cooldown>0)continue;let e=(r.trigger.min.x+r.trigger.max.x)/2,i=(r.trigger.min.z+r.trigger.max.z)/2,a=this.mesh.position.distanceTo(new R(e,this.mesh.position.y,i));a<t&&(t=a,n=r)}if(n){let e=(n.trigger.min.x+n.trigger.max.x)/2,t=(n.trigger.min.z+n.trigger.max.z)/2;this._waypoint.set(e,0,t),this._wpTimer=2}}_resolvePlatforms(e,t){let n=this.mesh.position.clone();for(let r of e){let e=n.x>r.min.x-Ac&&n.x<r.max.x+Ac,i=n.z>r.min.z-Ac&&n.z<r.max.z+Ac;if(!e||!i)continue;let a=r.max.y;n.y-this.velocity.y*t>=a-.1&&n.y<=a+.5&&this.velocity.y<=0&&(this.mesh.position.y=a,this.velocity.y=0,this.onGround=!0)}}_resolveWalls(e){let t=this.mesh.position;for(let n of e){if(t.y+kc<n.min.y||t.y>n.max.y)continue;let e=Math.max(n.min.x,Math.min(t.x,n.max.x)),r=Math.max(n.min.z,Math.min(t.z,n.max.z)),i=t.x-e,a=t.z-r,o=i*i+a*a;if(o<Ac*Ac){let e=Math.sqrt(o);e>0&&(t.x+=i/e*(Ac-e),t.z+=a/e*(Ac-e)),this._pickWaypoint()}}}_makeNameSprite(e){let t=document.createElement(`canvas`);t.width=256,t.height=64;let n=t.getContext(`2d`);n.fillStyle=`rgba(0,0,0,0.55)`,n.beginPath(),n.roundRect(4,4,t.width-8,t.height-8,10),n.fill(),n.fillStyle=`#ffffff`,n.font=`bold 28px Arial`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,t.width/2,t.height/2);let r=new Ln(new Cn({map:new Ir(t),transparent:!0,depthTest:!1}));return r.scale.set(2.5,.6,1),r}},Ic=class{constructor(){this.name=`Tag`}onStart(e){e.forEach(e=>{e.setIt(!1),e.setFrozen(!1)}),e[Math.floor(Math.random()*e.length)].setIt(!0)}update(e,t){for(let e of t)if(e.isIt){for(let n of t)if(!(n===e||n.isIt||n.tagImmunity>0)&&e.position.distanceTo(n.position)<=1.5){e.setIt(!1),n.setIt(!0);break}}}getHud(e){return e.isIt?`You are IT! Tag someone!`:`Run!`}isRoundOver(){return!1}},Lc=class{constructor(){this.name=`Freeze Tag`}onStart(e){e.forEach(e=>{e.setIt(!1),e.setFrozen(!1)}),e[Math.floor(Math.random()*e.length)].setIt(!0)}update(e,t){let n=t.find(e=>e.isIt);if(n){for(let e of t)e===n||e.isIt||e.tagImmunity>0||n.position.distanceTo(e.position)<=1.5&&e.setFrozen(!0);for(let e of t)if(!(e.isIt||e.isFrozen))for(let n of t)!n.isFrozen||n.isIt||e.position.distanceTo(n.position)<=1.5&&n.setFrozen(!1)}}getHud(e,t){return e.isIt?`Freeze everyone!`:e.isFrozen?`FROZEN — wait for a teammate to unfreeze you!`:`Run! Unfreeze teammates. Frozen: ${t.filter(e=>!e.isIt&&e.isFrozen).length}/${t.filter(e=>!e.isIt).length}`}isRoundOver(e){let t=e.filter(e=>!e.isIt);return t.length===0?!1:t.every(e=>e.isFrozen)}};let Rc=.05,zc=1.6;var Bc=class{constructor(){this.name=`Hot Potato`,this._potatoTimer=12,this._holdTime=0,this._prevHolder=null}onStart(e){e.forEach(e=>{e.setIt(!1),e.setFrozen(!1),e.setEliminated(!1)}),e[Math.floor(Math.random()*e.length)].setIt(!0),this._potatoTimer=12,this._holdTime=0,this._prevHolder=null}update(e,t){let n=t.filter(e=>!e.isEliminated),r=n.find(e=>e.isIt);if(!r)return;r!==this._prevHolder&&(this._holdTime=0,this._prevHolder=r),this._holdTime+=e;let i=Math.min(zc,1+this._holdTime*Rc);r.speedBoost*=i;for(let e of n)if(!(e===r||e.isIt||e.tagImmunity>0)&&r.position.distanceTo(e.position)<=1.5){r.setIt(!1),e.setIt(!0);return}if(this._potatoTimer-=e,this._potatoTimer<=0){r.setIt(!1),r.setEliminated(!0),this._holdTime=0,this._prevHolder=null;let e=t.filter(e=>!e.isEliminated);e.length>0&&e[Math.floor(Math.random()*e.length)].setIt(!0),this._potatoTimer=12}}getHud(e,t){let n=`(${t.filter(e=>!e.isEliminated).length} left)`;if(e.isEliminated)return`You were eliminated! Spectating...`;let r=Math.min(zc,1+this._holdTime*Rc),i=Math.round((r-1)*100);return e.isIt?`HOT POTATO! Pass it — ${Math.ceil(this._potatoTimer)}s until BOOM! +${i}% speed ${n}`:`Stay away from the potato holder! ${Math.ceil(this._potatoTimer)}s ${n}`}isRoundOver(e){let t=e.filter(e=>!e.isEliminated);return t.length<=1||!t.some(e=>e.isHuman)}};let Vc={freezeDurMult:e=>1,knockbackMult:e=>1,onProjectileHit:(e,t)=>0,onSplashHit:(e,t)=>0,onSwordHit:e=>0,onBiteHit:(e,t)=>{},isInvincible:e=>!1};function Hc(){Vc.freezeDurMult=()=>1,Vc.knockbackMult=()=>1,Vc.onProjectileHit=()=>0,Vc.onSplashHit=()=>0,Vc.onSwordHit=()=>0,Vc.onBiteHit=()=>{},Vc.isInvincible=()=>!1}let Uc={rocket:{name:`Rocket`,color:16720384,lightColor:16729088,size:.38,speed:20,cooldown:1.4,life:4,gravity:0,hitForce:34,hitForceY:22,splashRadius:9,freezeSec:0,pellets:1,spread:0,maxAmmo:1,reloadTime:5,regenAmmo:!1},freeze:{name:`Freeze Ray`,color:4500223,lightColor:6737151,size:.5,speed:26,cooldown:.9,life:3,gravity:0,hitForce:0,hitForceY:0,splashRadius:0,freezeSec:3,pellets:1,spread:0,maxAmmo:5,reloadTime:3,regenAmmo:!1},shotgun:{name:`Shotgun`,color:16772659,lightColor:16768256,size:.14,speed:36,cooldown:.85,life:.6,gravity:0,hitForce:20,hitForceY:6,splashRadius:0,freezeSec:0,pellets:7,spread:.22,maxAmmo:9,reloadTime:1,regenAmmo:!0},bite:{name:`Bite`,color:16720384,lightColor:16729088,size:0,speed:0,cooldown:.9,life:0,gravity:0,hitForce:0,hitForceY:0,splashRadius:0,freezeSec:0,pellets:0,spread:0,maxAmmo:-1,reloadTime:0,regenAmmo:!1},blaster:{name:`Blaster`,color:65348,lightColor:4521864,size:.16,speed:70,cooldown:.18,life:2,gravity:0,hitForce:28,hitForceY:10,splashRadius:0,freezeSec:0,pellets:1,spread:0,maxAmmo:6,reloadTime:1.5,regenAmmo:!1},sword:{name:`Sword`,color:11197951,lightColor:13430527,size:0,speed:0,cooldown:.7,life:0,gravity:0,hitForce:0,hitForceY:0,splashRadius:0,freezeSec:0,pellets:0,spread:0,maxAmmo:-1,reloadTime:0,regenAmmo:!1},dagger:{name:`Dagger`,color:4460902,lightColor:8921753,size:0,speed:0,cooldown:.55,life:0,gravity:0,hitForce:0,hitForceY:0,splashRadius:0,freezeSec:0,pellets:0,spread:0,maxAmmo:-1,reloadTime:0,regenAmmo:!1}},Wc=[`sword`,`rocket`,`freeze`,`shotgun`,`blaster`];var Gc=class e{static{this.DURATION=.55}constructor(e,t){this._scene=e,this._timer=0,this.done=!1,this._flash=new q(new Ur(.6,10,10),new K({color:16768324,transparent:!0,opacity:1})),this._flash.position.copy(t),e.add(this._flash),this._ring=new q(new Wr(.5,.15,6,20),new K({color:16737792,transparent:!0,opacity:.85})),this._ring.position.copy(t),this._ring.rotation.x=Math.PI/2,e.add(this._ring),this._particles=[],this._partVels=[];for(let n=0;n<14;n++){let n=new q(new Ur(.1,4,4),new K({color:16729088,transparent:!0,opacity:1}));n.position.copy(t),e.add(n),this._particles.push(n),this._partVels.push(new R((Math.random()-.5)*2,Math.random()*1.5+.5,(Math.random()-.5)*2).normalize().multiplyScalar(4+Math.random()*8))}this._light=new Ii(16737792,10,16),this._light.position.copy(t),e.add(this._light)}update(t){if(this.done)return;this._timer+=t;let n=this._timer/e.DURATION;if(n>=1){this._remove();return}let r=n<.3?1+n/.3*4:Math.max(0,5-(n-.3)/.7*5);this._flash.scale.setScalar(r),this._flash.material.opacity=Math.max(0,1-n*1.6);let i=1+n*7;this._ring.scale.set(i,i,1),this._ring.material.opacity=Math.max(0,.85-n*1.5),this._light.intensity=10*Math.max(0,1-n*2.5);for(let e=0;e<this._particles.length;e++)this._partVels[e].y-=22*t,this._particles[e].position.addScaledVector(this._partVels[e],t),this._particles[e].material.opacity=Math.max(0,1-n*1.8)}_remove(){this._scene.remove(this._flash,this._ring,this._light);for(let e of this._particles)this._scene.remove(e);this.done=!0}},Kc=class{constructor(e,t,n,r,i=`rocket`){this._scene=e,this._wType=i,this.done=!1,this._def=r,this._life=r.life,this.mesh=new q(new Ur(r.size,10,10),new K({color:r.color})),this.mesh.position.copy(t),this._light=new Ii(r.lightColor,2.5,r.size*28),this.mesh.add(this._light),e.add(this.mesh),this._vel=n.clone().normalize().multiplyScalar(r.speed)}update(e,t,n,r,i,a){if(this.done)return;if(this._life-=e,this._life<=0){this._remove();return}this._vel.y+=this._def.gravity*e,this.mesh.position.addScaledVector(this._vel,e);let o=this.mesh.position,s=Math.min(this._def.size,.25)+.05;for(let e of i)if(e.distanceToPoint(o)<s){this._def.splashRadius>0?this._explode(o,t,n,r):this._remove();return}for(let e of a)if(e.distanceToPoint(o)<s){this._def.splashRadius>0?this._explode(o,t,n,r):this._remove();return}let c=e=>new R(e.position.x,e.position.y+.9,e.position.z);if(this._def.splashRadius>0){for(let e of n)if(!(e===t||e.isEliminated)&&o.distanceTo(c(e))<this._def.size+.6){this._explode(o,t,n,r);return}}else for(let e of n)if(!(e===t||e.isEliminated)&&!(o.distanceTo(c(e))>this._def.size+.5)){this._applyHit(e,o,r),this._remove();return}}_explode(e,t,n,r){for(let r of n){if(r===t||r.isEliminated||Vc.isInvincible(r))continue;let n=e.distanceTo(r.position);if(n>this._def.splashRadius)continue;let i=1-n/this._def.splashRadius,a=new R(r.position.x-e.x,0,r.position.z-e.z),o=a.length();o>0&&a.divideScalar(o),r.velocity.x+=a.x*this._def.hitForce*i,r.velocity.z+=a.z*this._def.hitForce*i,r.velocity.y=Math.max(r.velocity.y,this._def.hitForceY*i),r.knockbackTimer=.55,r.tagImmunity=Math.max(r.tagImmunity,.55);let s=Vc.onSplashHit(r,i);s>0&&(r.hp=Math.max(0,r.hp-s))}this.onExplode?.(e),this._remove()}_applyHit(e,t,n){if(Vc.isInvincible(e))return;let r=new R(e.position.x-t.x,0,e.position.z-t.z),i=r.length();if(i>0&&r.divideScalar(i),this._def.hitForce>0){let t=Vc.knockbackMult(this._wType);e.velocity.x+=r.x*this._def.hitForce*t,e.velocity.z+=r.z*this._def.hitForce*t,e.velocity.y=Math.max(e.velocity.y,this._def.hitForceY*t),e.knockbackTimer=.55,e.tagImmunity=Math.max(e.tagImmunity,.55)}let a=Vc.onProjectileHit(e,this._wType);if(a>0&&(e.hp=Math.max(0,e.hp-a)),this._def.freezeSec>0){let t=this._def.freezeSec*Vc.freezeDurMult(e);e.setFrozen(!0),n.set(e,t)}}parry(){this._vel.negate()}forceRemove(e){e.remove(this.mesh),this.done=!0}_remove(){this._scene.remove(this.mesh),this.done=!0}};let qc=.25;var Jc=class{constructor(e,t,n){this._scene=e,this._forward=n,this._timer=qc,this._parriedProjectiles=new Set,this.done=!1,this.mesh=new pt;let r=new q(new J(.12,.12,2.2),new K({color:11197951}));r.position.z=-1.1,this.mesh.add(r);let i=new q(new J(.7,.12,.12),new K({color:8956620}));this.mesh.add(i),this._light=new Ii(11197951,4,6),this.mesh.add(this._light),this.mesh.position.copy(t).addScaledVector(n,.4),this.mesh.lookAt(t.clone().addScaledVector(n,-1)),e.add(this.mesh)}get position(){return this.mesh.position}update(e,t,n,r){if(!this.done){this._timer-=e,this._light.intensity=Math.max(0,this._timer/qc*4),this.mesh.rotation.y+=Math.PI*1.5*e/qc;for(let e of n){if(e===t||e.isEliminated||Vc.isInvincible(e))continue;let n=new R(e.position.x-t.position.x,0,e.position.z-t.position.z),r=n.length();if(r>3.2||r<.01||n.normalize().angleTo(new R(this._forward.x,0,this._forward.z).normalize())>1.4)continue;let i=Vc.knockbackMult(`sword`);e.velocity.x+=(n.x/r||0)*38*i,e.velocity.z+=(n.z/r||0)*38*i,e.velocity.y=Math.max(e.velocity.y,12*i),e.knockbackTimer=.7,e.tagImmunity=Math.max(e.tagImmunity,.7);let a=Vc.onSwordHit(e);a>0&&(e.hp=Math.max(0,e.hp-a))}for(let e of r)e.done||this._parriedProjectiles.has(e)||this.mesh.position.distanceTo(e.mesh.position)<4&&(this._parriedProjectiles.add(e),e.parry(),this._light.intensity=14,this._light.color.set(16777215));this._timer<=0&&(this._scene.remove(this.mesh),this.done=!0)}}};let Yc=.22;var Xc=class{constructor(e,t,n){this._scene=e,this._forward=n,this._timer=Yc,this._hitEntities=new Set,this.done=!1,this._flash=new q(new Ur(.55,7,7),new K({color:16720384,transparent:!0,opacity:.75})),this._flash.position.copy(t).addScaledVector(n,1.4),e.add(this._flash),this._light=new Ii(16720384,4,6),this._light.position.copy(this._flash.position),e.add(this._light)}update(e,t,n){if(this.done)return;this._timer-=e;let r=1-this._timer/Yc;this._flash.material.opacity=Math.max(0,.75-r*2),this._light.intensity=Math.max(0,4*(1-r*2.5)),this._flash.scale.setScalar(1+r*.8);for(let e of n){if(e===t||e.isEliminated||this._hitEntities.has(e))continue;let n=new R(e.position.x-t.position.x,0,e.position.z-t.position.z),r=n.length();r>2.8||r<.01||n.normalize().angleTo(new R(this._forward.x,0,this._forward.z).normalize())>1.3||(this._hitEntities.add(e),e.velocity.x+=(n.x/r||0)*7,e.velocity.z+=(n.z/r||0)*7,e.velocity.y=Math.max(e.velocity.y,4),e.knockbackTimer=.3,Vc.onBiteHit(e,t))}this._timer<=0&&(this._scene.remove(this._flash),this._scene.remove(this._light),this.done=!0)}};let Zc=.2;var Qc=class{constructor(e,t,n){this._scene=e,this._forward=n,this._timer=Zc,this._hitEntities=new Set,this.done=!1,this._flash=new q(new J(.12,1.6,.06),new K({color:13387007,transparent:!0,opacity:.85})),this._flash.position.copy(t).addScaledVector(n,1.2),this._flash.position.y+=.8,this._flash.rotation.z=Math.PI/5,e.add(this._flash),this._light=new Ii(8913100,5,5),this._light.position.copy(this._flash.position),e.add(this._light)}update(e,t,n){if(this.done)return;this._timer-=e;let r=1-this._timer/Zc;this._flash.material.opacity=Math.max(0,.85-r*3),this._light.intensity=Math.max(0,5*(1-r*3));let i=new R(this._forward.x,0,this._forward.z).normalize();for(let e of n){if(e===t||e.isEliminated||e.isIt||this._hitEntities.has(e))continue;let n=new R(e.position.x-t.position.x,0,e.position.z-t.position.z),r=n.length();if(r>2.2||r<.01||n.normalize().angleTo(i)>1.1)continue;let a=e,o=typeof a.yaw==`number`?a.yaw:Math.atan2(-e.velocity.x,-e.velocity.z),s=new R(-Math.sin(o),0,-Math.cos(o)),c=new R(t.position.x-e.position.x,0,t.position.z-e.position.z).normalize();s.dot(c)>.15||(this._hitEntities.add(e),e.setEliminated(!0))}this._timer<=0&&(this._scene.remove(this._flash),this._scene.remove(this._light),this.done=!0)}},$c=class{constructor(){this._type=`sword`,this._projectiles=[],this._swings=[],this._biteSwings=[],this._daggerSwings=[],this._explosions=[],this._cooldown=0,this._freezeMap=new Map,this._ammo=new Map,this._reloadTimer=new Map}get type(){return this._type}get canFire(){return this._cooldown<=0}get def(){return Uc[this._type]}get ammo(){let e=Uc[this._type];return e.maxAmmo===-1?-1:this._ammo.get(this._type)??e.maxAmmo}get reloadProgress(){let e=Uc[this._type];if(e.reloadTime===0)return 1;let t=this._reloadTimer.get(this._type)??0;return t<=0?1:1-t/e.reloadTime}get isReloading(){let e=Uc[this._type];return e.reloadTime===0||e.maxAmmo===-1?!1:(this._reloadTimer.get(this._type)??0)>0}setWeapon(e){this._type=e,this._cooldown=0;let t=Uc[e];t.maxAmmo!==-1&&!this._ammo.has(e)&&this._ammo.set(e,t.maxAmmo)}resetAmmo(){this._ammo.clear(),this._reloadTimer.clear();for(let[e,t]of Object.entries(Uc))t.maxAmmo!==-1&&this._ammo.set(e,t.maxAmmo)}fireAs(e,t,n,r,i){if(i===`sword`)return;let a=Uc[i];if(a.pellets===1){let r=new Kc(e,t,n,a,i);i===`rocket`&&(r.onExplode=t=>this._explosions.push(new Gc(e,t))),this._projectiles.push(r)}else for(let r=0;r<a.pellets;r++){let r=(Math.random()-.5)*2*a.spread,o=new R(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),s=n.clone().applyAxisAngle(o,r).normalize();this._projectiles.push(new Kc(e,t,s,a,i))}}fire(e,t,n,r){if(this._cooldown>0)return;let i=Uc[this._type];if(this._type===`sword`){this._swings.push(new Jc(e,t,n)),this._cooldown=i.cooldown;return}if(this._type===`bite`){this._biteSwings.push(new Xc(e,t,n)),this._cooldown=i.cooldown;return}if(this._type===`dagger`){this._daggerSwings.push(new Qc(e,t,n)),this._cooldown=i.cooldown;return}if(i.maxAmmo!==-1){let e=this._ammo.get(this._type)??i.maxAmmo;if(e<=0)return;this._ammo.set(this._type,e-1),e-1==0&&this._reloadTimer.set(this._type,i.reloadTime)}if(i.pellets===1){let r=new Kc(e,t,n,i,this._type);this._type===`rocket`&&(r.onExplode=t=>this._explosions.push(new Gc(e,t))),this._projectiles.push(r)}else for(let r=0;r<i.pellets;r++){let r=(Math.random()-.5)*2*i.spread,a=new R(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),o=n.clone().applyAxisAngle(a,r).normalize();this._projectiles.push(new Kc(e,t,o,i,this._type))}this._cooldown=i.cooldown}update(e,t,n,r,i=[],a=[]){this._cooldown=Math.max(0,this._cooldown-e);for(let[t,n]of this._reloadTimer){if(n<=0)continue;let r=Uc[t],i=n-e;if(i<=0)if(r.regenAmmo){let e=this._ammo.get(t)??0,n=Math.min(e+1,r.maxAmmo);this._ammo.set(t,n),this._reloadTimer.set(t,n<r.maxAmmo?r.reloadTime:0)}else this._ammo.set(t,r.maxAmmo),this._reloadTimer.set(t,0);else this._reloadTimer.set(t,i)}for(let[t,n]of this._freezeMap){let r=n-e;r<=0?(this._freezeMap.delete(t),t.isEliminated||t.setFrozen(!1)):this._freezeMap.set(t,r)}for(let t of this._projectiles)t.update(e,n,r,this._freezeMap,i,a);this._projectiles=this._projectiles.filter(e=>!e.done);for(let t of this._swings)t.update(e,n,r,this._projectiles);this._swings=this._swings.filter(e=>!e.done);for(let t of this._biteSwings)t.update(e,n,r);this._biteSwings=this._biteSwings.filter(e=>!e.done);for(let t of this._daggerSwings)t.update(e,n,r);this._daggerSwings=this._daggerSwings.filter(e=>!e.done);for(let t of this._explosions)t.update(e);this._explosions=this._explosions.filter(e=>!e.done)}};let el=new Map;var tl=class{constructor(){this.name=`Infection`}onStart(e){el.clear(),e.forEach(e=>{e.setIt(!1),e.setFrozen(!1),e.hp=100});let t=e[Math.floor(Math.random()*e.length)];t.setIt(!0),t.hp=200}update(e,t){}getHud(e,t){let n=t.filter(e=>e.isIt).length,r=t.filter(e=>!e.isIt&&!e.isEliminated).length;return e.isIt?`ZOMBIE! [HP: ${Math.max(0,e.hp)}/200]  Infect ${r} remaining!`:`Stay healthy! ${n} zombies, ${r} healthy. (${3-(el.get(e)??0)} bites before zombified)`}isRoundOver(e){return e.every(e=>e.isIt||e.isEliminated)}};function nl(){Vc.freezeDurMult=e=>e.isIt?.5:1,Vc.knockbackMult=e=>e===`blaster`||e===`sword`?.25:1,Vc.onProjectileHit=(e,t)=>e.isIt&&t===`blaster`?15:0,Vc.onSplashHit=()=>0,Vc.onSwordHit=e=>e.isIt?30:0,Vc.onBiteHit=(e,t)=>{if(e.isIt||e.isEliminated)return;let n=(el.get(e)??0)+1;n>=3?(el.delete(e),e.setIt(!0),e.hp=200,e.tagImmunity=1.5):el.set(e,n)}}var rl=class{constructor(){this.name=`Hunter`}onStart(e){e.forEach(e=>{e.setIt(!1),e.setFrozen(!1)}),e[Math.floor(Math.random()*e.length)].setIt(!0)}update(e,t,n){for(let e of t)if(e.isIt){for(let r of t)if(!(r===e||r.isIt||r.tagImmunity>0)&&e.position.distanceTo(r.position)<=1.5){if(n)for(let e of n)e.sabotaged=!1,e.sabotageProgress=0,e.cooldown===0&&(e.sprite.visible=!1);e.setIt(!1),r.setIt(!0);break}}if(n)for(let e of n){if(e.sabotaged){e.cooldown===0&&(e.sprite.visible=!0,this._drawTrapSprite(e));continue}let t=e.sabotageProgress??0;t>=2?(e.sabotaged=!0,e.sabotageProgress=0,e.cooldown===0&&(e.sprite.visible=!0,this._drawTrapSprite(e))):t>0?e.cooldown===0&&(e.sprite.visible=!0,this._drawProgressSprite(e,t/2)):e.cooldown===0&&(e.sprite.visible=!1)}}getHud(e){return e.isIt?`You are the HUNTER! Hold [E] near a teleporter for 2s to trap it. Anyone who steps on it while you're setting up gets frozen!`:`The hunter is coming — watch out for trapped teleporters!`}isRoundOver(){return!1}_drawProgressSprite(e,t){let n=e.canvas.getContext(`2d`),r=e.canvas.width;n.clearRect(0,0,r,r),n.beginPath(),n.arc(r/2,r/2,r/2-4,0,Math.PI*2),n.fillStyle=`rgba(0,0,0,0.65)`,n.fill(),n.beginPath(),n.moveTo(r/2,r/2),n.arc(r/2,r/2,r/2-4,-Math.PI/2,-Math.PI/2+t*Math.PI*2),n.closePath(),n.fillStyle=`rgba(255, 120, 0, 0.75)`,n.fill(),n.fillStyle=`#ffffff`,n.font=`bold ${r*.3}px Arial`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`!`,r/2,r/2),e.texture.needsUpdate=!0}_drawTrapSprite(e){let t=e.canvas.getContext(`2d`),n=e.canvas.width;t.clearRect(0,0,n,n),t.beginPath(),t.arc(n/2,n/2,n/2-4,0,Math.PI*2),t.fillStyle=`rgba(180, 0, 0, 0.85)`,t.fill(),t.fillStyle=`#ffffff`,t.font=`bold ${n*.28}px Arial`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`TRAP`,n/2,n/2),e.texture.needsUpdate=!0}};let il=.55,al=3.5,ol=[new R(8,2,8),new R(-8,2,8),new R(8,2,-8),new R(-8,2,-8),new R(34,2,0),new R(-34,2,0),new R(0,2,34),new R(0,2,-34),new R(30,2,30),new R(-30,2,30),new R(30,2,-30),new R(-30,2,-30),new R(57,2,0),new R(-57,2,0),new R(0,2,57),new R(0,2,-57),new R(48,2,48),new R(-48,2,48),new R(48,2,-48),new R(-48,2,-48),new R(81,2,0),new R(-81,2,0),new R(0,2,81),new R(0,2,-81),new R(104,2,0),new R(-104,2,0),new R(0,2,104),new R(0,2,-104),new R(0,13,0)];var sl=class{constructor(){this.name=`Tomfoolery`,this.rare=!0,this._graceTimer=0,this._prevEliminated=new Set}onStart(e){this._prevEliminated.clear();let t=ol.map((e,t)=>t).sort(()=>Math.random()-.5);e.forEach((e,n)=>{e.setIt(!1),e.setFrozen(!1),e.setEliminated(!1),e.hp=100,e.lives=3;let r=ol[t[n%t.length]];e.position.set(r.x,r.y,r.z),e.velocity.set(0,0,0)}),this._graceTimer=5}update(e,t){for(let e of t){let t=this._prevEliminated.has(e);if(e.isEliminated&&!t&&(e.lives=Math.max(0,e.lives-1),e.lives>0)){let t=ol[Math.floor(Math.random()*ol.length)];e.setEliminated(!1),e.setFrozen(!1),e.position.set(t.x,t.y,t.z),e.velocity.set(0,0,0),e.hp=100,e.tagImmunity=al,e.knockbackTimer=0}}this._prevEliminated.clear();for(let e of t)e.isEliminated&&this._prevEliminated.add(e);this._graceTimer>0&&(this._graceTimer-=e);let n=t.filter(e=>!e.isEliminated);for(let e=0;e<n.length;e++)for(let t=e+1;t<n.length;t++){let r=n[e],i=n[t];if(r.knockbackTimer>0||i.knockbackTimer>0||r.tagImmunity>0||i.tagImmunity>0)continue;let a=i.position.x-r.position.x,o=i.position.z-r.position.z,s=Math.sqrt(a*a+o*o);if(s>1.4||s<.01)continue;let c=a/s,l=o/s;i.velocity.x+=c*22,i.velocity.z+=l*22,i.velocity.y=Math.max(i.velocity.y,7),i.knockbackTimer=il,i.tagImmunity=Math.max(i.tagImmunity,il),r.velocity.x-=c*22,r.velocity.z-=l*22,r.velocity.y=Math.max(r.velocity.y,7),r.knockbackTimer=il,r.tagImmunity=Math.max(r.tagImmunity,il),r.hp=Math.max(0,r.hp-22),i.hp=Math.max(0,i.hp-22),r.hp<=0&&!r.isEliminated&&r.setEliminated(!0),i.hp<=0&&!i.isEliminated&&i.setEliminated(!0)}}getHud(e,t){let n=t.filter(e=>!e.isEliminated).length;if(e.isEliminated&&e.lives<=0)return`You're out! Spectating...`;if(e.isEliminated)return`Respawning...`;let r=Math.round(e.hp/100*100);return`♥×${e.lives}  HP:${r}%  |  Alive: ${n}`}isRoundOver(e){return this._graceTimer>0?!1:e.filter(e=>!e.isEliminated).length<=1}},cl=class{constructor(){this.name=`Haunted`}onStart(e){e.forEach(e=>{e.setIt(!1),e.setFrozen(!1),e.setEliminated(!1)}),e[Math.floor(Math.random()*e.length)].setIt(!0)}update(e,t){}getHud(e,t){let n=t.filter(e=>!e.isIt&&!e.isEliminated).length;return e.isIt?`YOU ARE THE GHOST — stab survivors from BEHIND with [LMB]! (${n} left)`:`Hide and keep the ghost in sight — it can only stab from BEHIND! (${n} survivors)`}isRoundOver(e){return e.filter(e=>!e.isIt&&!e.isEliminated).length===0}},ll=class{constructor(e,t,n,r,i,a,o,s,c){this._t=0,this._dir=1,this.delta=new R,this._patrolA=e.clone(),this._patrolB=t.clone(),this._patrolDist=e.distanceTo(t),this._speed=o,this._halfW=n/2,this._halfH=r/2,this._halfD=i/2,this._mesh=new q(new J(n,r,i),new Y({color:a})),this._mesh.position.copy(e),this._mesh.castShadow=!0,this._mesh.receiveShadow=!0,s(this._mesh),this._collider=new G,this._refreshCollider(),c.push(this._collider)}_refreshCollider(){let e=this._mesh.position;this._collider.set(new R(e.x-this._halfW,e.y-this._halfH,e.z-this._halfD),new R(e.x+this._halfW,e.y+this._halfH,e.z+this._halfD))}preUpdate(e){if(this._patrolDist===0){this.delta.set(0,0,0);return}let t=this._mesh.position.clone();this._t+=e*this._speed/this._patrolDist*this._dir,this._t>=1&&(this._t=1,this._dir=-1),this._t<=0&&(this._t=0,this._dir=1),this._mesh.position.lerpVectors(this._patrolA,this._patrolB,this._t),this.delta.subVectors(this._mesh.position,t),this._refreshCollider()}isOnTop(e){let t=this._collider,n=e.y>=t.max.y-.15&&e.y<=t.max.y+.25,r=e.x>=t.min.x-.25&&e.x<=t.max.x+.25&&e.z>=t.min.z-.25&&e.z<=t.max.z+.25;return n&&r}};function ul(e){let t=[],n=[],r=[],i=[];function a(t){return e.add(t),i.push(t),t}let o=new q(new Hr(60,60),new Y({color:5605427}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,a(o),a(new Xi(60,22,3368482,3368482));function s(e,n,r,i,o,s,c=8939076){let l=new q(new J(i,o,s),new Y({color:c}));return l.position.set(e,n+o/2,r),l.castShadow=!0,l.receiveShadow=!0,a(l),t.push(new G().setFromObject(l)),l}function c(e,t,r,i,o,s,c=7820612){let l=new q(new J(i,o,s),new Y({color:c}));l.position.set(e,t+o/2,r),l.castShadow=!0,l.receiveShadow=!0,a(l),n.push(new G().setFromObject(l))}function l(e,t,n,i,o,s){let c=new q(new Br(.7,.7,.15,16),new Y({color:61183,emissive:new W(26248)}));c.position.set(e,t+.08,n),a(c);let l=new q(new Wr(.85,.08,8,24),new K({color:65535}));l.position.set(e,t+.15,n),l.rotation.x=Math.PI/2,a(l);let u=new G(new R(e-.7,t,n-.7),new R(e+.7,t+.5,n+.7)),d=document.createElement(`canvas`);d.width=128,d.height=128;let f=new Ir(d),p=new Ln(new Cn({map:f,transparent:!0,depthTest:!1}));p.position.set(e,t+1.6,n),p.scale.set(1.2,1.2,1),p.visible=!1,a(p),r.push({trigger:u,destination:new R(i,o,s),cooldown:0,sprite:p,texture:f,canvas:d})}function u(e,t,n=1){let r=new q(new Br(.2*n,.3*n,2*n,6),new Y({color:9133628}));r.position.set(e,n,t),r.castShadow=!0,a(r);let i=new q(new Ur(1.4*n,7,7),new Y({color:2984493}));i.position.set(e,n*3.2,t),i.castShadow=!0,a(i)}let d=new K({transparent:!0,opacity:0});for(let[e,t,n,r]of[[0,30,60,.5],[0,-30,60,.5],[30,0,.5,60],[-30,0,.5,60]]){let i=new q(new J(n,20,r),d);i.position.set(e,10,t),a(i)}s(-8,2,0,4,.4,4),s(8,2,0,4,.4,4),s(0,2,10,4,.4,4),s(0,2,-10,4,.4,4),s(-11,4,-11,4,.4,4,6724010),s(11,4,-11,4,.4,4,6724010),s(-11,4,11,4,.4,4,6724010),s(11,4,11,4,.4,4,6724010),s(-17,3,0,4,.4,3,8939076),s(17,3,0,4,.4,3,8939076),s(0,3,17,3,.4,4,8939076),s(0,3,-17,3,.4,4,8939076),s(-7,6,-5,3,.4,3,8939178),s(7,6,-5,3,.4,3,8939178),s(-7,6,5,3,.4,3,8939178),s(7,6,5,3,.4,3,8939178),s(-23,5,0,4,.4,6,11171635),s(23,5,0,4,.4,6,11171635),s(0,5,23,6,.4,4,11171635),s(0,5,-23,6,.4,4,11171635),s(0,9,0,4,.4,4,13408580),s(0,12,0,2.5,.4,2.5,16759637),s(-10,3,-5,3,.4,3,7838020),s(10,3,-5,3,.4,3,7838020),s(-10,3,5,3,.4,3,7838020),s(10,3,5,3,.4,3,7838020),s(-5,3,-10,3,.4,3,7838020),s(5,3,-10,3,.4,3,7838020),s(-5,3,10,3,.4,3,7838020),s(5,3,10,3,.4,3,7838020),s(-14,5,-9,3,.4,3,6715306),s(14,5,-9,3,.4,3,6715306),s(-14,5,9,3,.4,3,6715306),s(14,5,9,3,.4,3,6715306),s(-9,5,-14,3,.4,3,6715306),s(9,5,-14,3,.4,3,6715306),s(-9,5,14,3,.4,3,6715306),s(9,5,14,3,.4,3,6715306),s(-10,7,0,3,.4,3,10053324),s(10,7,0,3,.4,3,10053324),s(0,7,-10,3,.4,3,10053324),s(0,7,10,3,.4,3,10053324),c(4,0,4,.3,1.8,4),c(-4,0,-4,4,1.8,.3),c(7,0,-5,.3,1.8,4),c(-7,0,5,4,1.8,.3),c(-14,0,7,.3,2,5),c(-14,0,-7,5,2,.3),c(14,0,-7,.3,2,5),c(14,0,7,5,2,.3),c(-5,0,16,.3,2,5),c(5,0,16,.3,2,5),c(0,3.4,-19.5,3,2,.3),c(-3,5.4,23,.3,2,4),c(3,5.4,23,.3,2,4),c(1.1,9.4,0,.3,1,4,14527061),c(-1.1,9.4,0,.3,1,4,14527061),c(0,9.4,1.1,4,1,.3,14527061),c(0,9.4,-1.1,4,1,.3,14527061),l(0,0,0,0,13,0),l(0,12.4,0,0,1.5,0),r[r.length-2].link=r[r.length-1],r[r.length-1].link=r[r.length-2],l(-8,2.4,0,23,6.5,0),l(23,5.4,0,-8,3.5,0),r[r.length-2].link=r[r.length-1],r[r.length-1].link=r[r.length-2],l(0,5.4,23,0,6.5,-23),l(0,5.4,-23,0,6.5,23),r[r.length-2].link=r[r.length-1],r[r.length-1].link=r[r.length-2],l(-11,4.4,-11,11,5.5,11),l(11,4.4,11,-11,5.5,-11),r[r.length-2].link=r[r.length-1],r[r.length-1].link=r[r.length-2];let f=[];return f.push(new ll(new R(-16,8.5,-5),new R(16,8.5,-5),4.5,.4,3,14216440,2.5,a,t)),f.push(new ll(new R(5,10,-16),new R(5,10,16),3.5,.4,4,14741759,2,a,t)),f.push(new ll(new R(-12,13,7),new R(12,13,7),3,.4,3,13428991,3.5,a,t)),u(-25,25),u(25,25),u(-25,-25),u(25,-25),u(-25,0),u(25,0),u(0,25),u(0,-25),u(-15,15),u(15,15),u(-15,-15),u(15,-15),u(-3,3,.6),u(3,-3,.6),u(3,3,.6),u(-3,-3,.6),{colliders:t,walls:n,teleporters:r,movingPlatforms:f,boundary:30,gravity:-28,background:8900331,dispose:()=>i.forEach(t=>e.remove(t))}}var dl=class{constructor(e,t,n,r,i,a,o,s,c=0){this._cooldowns=new Map,this._axis=e,this._val=t,this._fixed=n,this._min=r,this._max=i,this._dir=a,this._yOffset=c,this._group=new pt;let l=new q(new J(1.8,.7,.9),new Y({color:o}));l.position.y=.55,this._group.add(l);let u=Math.min(16777215,o+1118481),d=new q(new J(1.1,.55,.82),new Y({color:u}));d.position.set(-.1,1.05,0),this._group.add(d);let f=new Ii(16772744,.9,6);f.position.set(.95,.6,0),this._group.add(f),this._applyTransform(),s(this._group)}_applyTransform(){this._axis===`x`?(this._group.position.set(this._val,this._yOffset,this._fixed),this._group.rotation.y=this._dir>0?0:Math.PI):(this._group.position.set(this._fixed,this._yOffset,this._val),this._group.rotation.y=this._dir>0?Math.PI/2:-Math.PI/2)}update(e,t){for(let[t,n]of this._cooldowns){let r=n-e;r<=0?this._cooldowns.delete(t):this._cooldowns.set(t,r)}this._val+=this._dir*9*e,this._val>=this._max&&(this._val=this._max,this._dir=-1),this._val<=this._min&&(this._val=this._min,this._dir=1),this._applyTransform();let n=this._group.position;for(let e of t){if(e.isEliminated||this._cooldowns.has(e)||Math.abs(e.position.y-this._yOffset)>1.8)continue;let t,r;this._axis===`x`?(t=(e.position.x-n.x)*this._dir,r=Math.abs(e.position.z-n.z)):(t=(e.position.z-n.z)*this._dir,r=Math.abs(e.position.x-n.x)),t>0&&t<2&&r<.65&&(this._axis===`x`?e.velocity.x=this._dir*38:e.velocity.z=this._dir*38,e.velocity.y=Math.max(e.velocity.y,14),e.tagImmunity=Math.max(e.tagImmunity,2),this._cooldowns.set(e,2))}}};let fl=.35;var pl=class{constructor(e,t,n,r,i,a,o){this._topY=n+fl,this._halfW=i/2,this._mesh=new pt;let s=new Y({color:3355443}),c=new q(new Wr(i/2,.12,6,20),s);c.rotation.x=Math.PI/2,c.position.y=fl,this._mesh.add(c);let l=new Y({color:8947848});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=new q(new Br(.04,.04,fl,4),l);n.position.set(Math.cos(t)*i/2,fl/2,Math.sin(t)*i/2),this._mesh.add(n)}let u=new q(new Br(i/2-.1,i/2-.1,.06,16),new K({color:2289220}));u.position.y=fl,this._mesh.add(u);let d=new Ii(2293572,1.2,5);d.position.y=fl,this._mesh.add(d),this._mesh.position.set(t,n,r),a(this._mesh),o.push(new G(new R(t-this._halfW,n,r-this._halfW),new R(t+this._halfW,n+fl,r+this._halfW)))}update(e,t){let n=this._mesh.position.x,r=this._mesh.position.z;for(let e of t){if(e.isEliminated)continue;let t=Math.abs(e.position.x-n),i=Math.abs(e.position.z-r);t>this._halfW+.5||i>this._halfW+.5||e.position.y>=this._topY-.15&&e.position.y<=this._topY+.2&&e.velocity.y<=1&&(e.velocity.y=32)}}};function ml(e){let t=[],n=[],r=[],i=[];function a(t){return e.add(t),i.push(t),t}e.fog=new St(657946,20,80);let o=new q(new Hr(68,68),new Y({color:1710638}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,a(o);let s=new K({color:3355460}),c=new K({color:2236979}),l=new K({color:16777130});function u(e,t,n){let r=new q(new Hr(68,t),n);r.rotation.x=-Math.PI/2,r.position.set(0,.01,e),a(r)}function d(e,t,n){let r=new q(new Hr(t,68),n);r.rotation.x=-Math.PI/2,r.position.set(e,.01,0),a(r)}function f(e,t,n,r){let i=new q(new Hr(r?n:.15,r?.15:n),l);i.rotation.x=-Math.PI/2,i.position.set(e,.02,t),a(i)}u(0,8,c),d(0,8,c);for(let e=-30;e<=30;e+=5)f(e,0,3,!0);for(let e=-30;e<=30;e+=5)f(0,e,3,!1);u(-16,4,s),u(16,4,s),d(-16,4,s),d(16,4,s);function p(e,r,i,o,s,c){let l=new q(new J(i,o,s),new Y({color:c}));l.position.set(e,o/2,r),l.castShadow=!0,l.receiveShadow=!0,a(l),t.push(new G(new R(e-i/2,o-.05,r-s/2),new R(e+i/2,o+.05,r+s/2))),n.push(new G(new R(e-i/2,0,r-s/2),new R(e+i/2,o,r+s/2)))}function m(e,t,r){let i=new pt,o=new q(new J(1.8,.7,.9),new Y({color:2241365}));o.position.y=.55,i.add(o);let s=new q(new J(1.1,.55,.85),new Y({color:3359846}));s.position.set(-.1,1.05,0),i.add(s),i.position.set(e,0,t),i.rotation.y=r,i.castShadow=!0,a(i);let c=new G().setFromObject(i);n.push(c)}function h(e,t,n,i,o,s){let c=new q(new Br(.7,.7,.15,16),new Y({color:16737792,emissive:new W(8925952)}));c.position.set(e,t+.08,n),a(c);let l=new q(new Wr(.85,.08,8,24),new K({color:16746496}));l.position.set(e,t+.15,n),l.rotation.x=Math.PI/2,a(l);let u=new G(new R(e-.7,t,n-.7),new R(e+.7,t+.5,n+.7)),d=document.createElement(`canvas`);d.width=128,d.height=128;let f=new Ir(d),p=new Ln(new Cn({map:f,transparent:!0,depthTest:!1}));p.position.set(e,t+1.6,n),p.scale.set(1.2,1.2,1),p.visible=!1,a(p);let m={trigger:u,destination:new R(i,o,s),cooldown:0,sprite:p,texture:f,canvas:d};return r.push(m),m}p(-20,-20,6,8,6,2763326),p(20,-20,5,12,5,1976890),p(-20,20,7,15,6,3022382),p(20,20,6,6,7,1715738),p(-24,0,4,9,4,2759194),p(24,0,5,11,5,1710638),p(0,-24,8,7,5,3026462),p(0,24,6,10,6,1977902),p(-8,-16,4,5,4,1973806),p(8,-16,4,7,4,2236979),p(-16,8,4,6,4,1976352),p(16,-8,4,8,4,2105374);function g(e,n,r,i,o){let s=new q(new J(i,.3,o),new Y({color:2763332}));s.position.set(e,n,r),s.castShadow=!0,a(s),t.push(new G(new R(e-i/2,n-.15,r-o/2),new R(e+i/2,n+.15,r+o/2)))}g(-10,4,0,3,3),g(10,5,0,3,3),g(0,4,10,3,3),g(0,5,-10,3,3),g(-16,5,-8,3,3),g(16,5,8,3,3),g(-8,4,16,3,3),g(8,4,-16,3,3),g(-12,6,-4,5,2),g(12,6,4,5,2),g(-4,6,12,2,5),g(4,6,-12,2,5),m(-11,-4,0),m(-11,4,0),m(11,-4,Math.PI),m(11,4,Math.PI),m(-4,-14,Math.PI/2),m(4,14,Math.PI/2);for(let[e,t]of[[-14,-14],[14,-14],[-14,14],[14,14]]){let n=new q(new Br(.05,.07,4,6),new Y({color:4473924}));n.position.set(e,2,t),a(n);let r=new q(new Ur(.15,6,6),new K({color:16777130}));r.position.set(e,4.2,t),a(r);let i=new Ii(16777130,.8,12);i.position.set(e,4,t),a(i)}let _=[];_.push(new pl(e,-20,0,15,2.2,a,t)),_.push(new pl(e,20,0,-15,2.2,a,t)),_.push(new pl(e,19,0,0,2.2,a,t)),_.push(new pl(e,-19,0,0,2.2,a,t)),_.push(new pl(e,0,0,19,2.2,a,t)),_.push(new dl(`x`,-30,-2,-30,30,1,13378082,a)),_.push(new dl(`x`,10,2,-30,30,-1,13412864,a)),_.push(new dl(`z`,-30,-2,-30,30,1,2245836,a)),_.push(new dl(`z`,0,2,-30,30,-1,11150028,a)),_.push(new dl(`x`,-25,-16.8,-30,30,1,16746496,a)),_.push(new dl(`x`,5,-15.2,-30,30,-1,43775,a)),_.push(new dl(`x`,15,16.8,-30,30,-1,16729258,a)),_.push(new dl(`x`,-10,15.2,-30,30,1,8978176,a)),_.push(new dl(`z`,20,-16.8,-30,30,-1,16763904,a)),_.push(new dl(`z`,-20,16.8,-30,30,1,65484,a));let v=5.5,y=.5;{let e=a(new q(new J(56,y,4),new Y({color:2763322})));e.position.set(0,v,8),e.castShadow=!0,e.receiveShadow=!0,t.push(new G(new R(-28,v-y/2,8-4/2),new R(28,v+y/2,10)))}for(let e of[-1,1])a(new q(new J(56,.6,.15),new Y({color:5592422}))).position.set(0,v+y/2+.3,8+4/2*e);for(let e=-24;e<=24;e+=8){let t=a(new q(new J(.8,v,.8),new Y({color:3355460})));t.position.set(e,v/2,8),n.push(new G().setFromObject(t))}for(let e=0;e<5;e++){let n=e/4*v+y/2,r=a(new q(new J(3,.3,1.4),new Y({color:2763322}))),i=11+e*1.4;r.position.set(-26+e*.5,n,i),t.push(new G(new R(-26+e*.5-3/2,n-.15,i-.7),new R(-26+e*.5+3/2,n+.15,i+.7)))}_.push(new dl(`x`,-28,8,-28,28,1,16720520,a,v+y/2));let b=h(0,0,0,-20,15.5,20),x=h(-20,15,20,0,1.5,0);b.link=x,x.link=b;let S=h(-24,9,0,24,11.5,0),C=h(24,11,0,-24,9.5,0);S.link=C,C.link=S;let w=h(0,7,-24,0,10.5,24),T=h(0,10,24,0,7.5,-24);return w.link=T,T.link=w,{colliders:t,walls:n,teleporters:r,hazards:_,boundary:34,gravity:-28,background:657946,dispose:()=>{e.fog=null,i.forEach(t=>e.remove(t))}}}var hl=class{get position(){return this._mesh.position}constructor(e,t,n,r=[]){this._teleportSpots=r,this._t=0,this._dir=1,this._captured=new Map,this._patrolA=e.clone(),this._patrolB=t.clone(),this._patrolDist=e.distanceTo(t),this._mesh=new pt,this._mesh.position.copy(e);let i=new q(new Ur(.85,16,16),new K({color:0}));this._mesh.add(i),this._rings=[];let a=[{r:1.7,tube:.09,color:7799022},{r:2.6,tube:.07,color:4456601},{r:3.6,tube:.05,color:2228309}];for(let e=0;e<a.length;e++){let t=a[e],n=new q(new Wr(t.r,t.tube,8,64),new K({color:t.color}));n.rotation.x=Math.PI/2.5*e,n.rotation.y=Math.PI/4*e,this._mesh.add(n),this._rings.push(n)}let o=new q(new Wr(5,.03,4,80),new K({color:1114163,transparent:!0,opacity:.6}));this._mesh.add(o);let s=new Ii(10027263,2.5,14);this._mesh.add(s),n(this._mesh)}update(e,t){this._patrolDist>0&&(this._t+=e*2.5/this._patrolDist*this._dir,this._t>=1&&(this._t=1,this._dir=-1),this._t<=0&&(this._t=0,this._dir=1),this._mesh.position.lerpVectors(this._patrolA,this._patrolB,this._t));for(let t=0;t<this._rings.length;t++)this._rings[t].rotation.z+=e*(.9+t*.55)*(t%2==0?1:-1);let n=this._mesh.position;for(let r of t){if(r.isEliminated){this._captured.has(r)&&(this._captured.delete(r),r.setFrozen(!1));continue}if(this._captured.has(r)){let t=this._captured.get(r)+e;this._captured.set(r,t);let i=t*2.2;if(r.position.set(n.x+Math.cos(i)*1.2,n.y+Math.sin(i*.6)*.5,n.z+Math.sin(i)*1.2),r.velocity.set(0,-lc*e,0),r.tagImmunity=Math.max(r.tagImmunity,.15),r.knockbackTimer=.15,t>=2.5){if(this._captured.delete(r),r.setFrozen(!1),r.velocity.set(0,0,0),this._teleportSpots.length>0){let e=this._teleportSpots[Math.floor(Math.random()*this._teleportSpots.length)];r.position.set(e.x,e.y,e.z),r.velocity.y=4}else{let e=new R().subVectors(r.position,n).normalize();e.y=Math.max(e.y,.45),e.normalize(),r.velocity.copy(e.multiplyScalar(28))}r.tagImmunity=Math.max(r.tagImmunity,2.5),r.knockbackTimer=.6}}else{let t=r.position.distanceTo(n);if(t<2.2&&!r.isFrozen)this._captured.set(r,0),r.setFrozen(!0),r.velocity.set(0,-lc*e,0);else if(t<8&&!this._isHeldByOther(r)){let i=1-t/8,a=i*i*26,o=new R().subVectors(n,r.position).normalize();r.velocity.addScaledVector(o,a*e)}}}}_isHeldByOther(e){return e.isFrozen}};function gl(e){let t=[],n=[],r=[],i=[];function a(t){return e.add(t),i.push(t),t}e.fog=null;let o=new _n,s=new Float32Array(500*3);for(let e=0;e<500;e++)s[e*3]=(Math.random()-.5)*200,s[e*3+1]=Math.random()*80+5,s[e*3+2]=(Math.random()-.5)*200;o.setAttribute(`position`,new tn(s,3)),a(new Nr(o,new Or({color:16777215,size:.2})));function c(e,n,r,i,o,s,c=4478310){let l=new q(new J(i,o,s),new Y({color:c}));l.position.set(e,n+o/2,r),l.castShadow=!0,l.receiveShadow=!0,a(l),t.push(new G().setFromObject(l))}function l(e,t,r,i,o,s,c=5596791){let l=new q(new J(i,o,s),new Y({color:c}));l.position.set(e,t+o/2,r),l.castShadow=!0,a(l),n.push(new G().setFromObject(l))}function u(e,t,n,i,o,s){let c=new q(new Br(.7,.7,.15,16),new Y({color:11141375,emissive:new W(4456584)}));c.position.set(e,t+.08,n),a(c);let l=new q(new Wr(.85,.08,8,24),new K({color:13387007}));l.position.set(e,t+.15,n),l.rotation.x=Math.PI/2,a(l);let u=new G(new R(e-.7,t,n-.7),new R(e+.7,t+.5,n+.7)),d=document.createElement(`canvas`);d.width=128,d.height=128;let f=new Ir(d),p=new Ln(new Cn({map:f,transparent:!0,depthTest:!1}));p.position.set(e,t+1.6,n),p.scale.set(1.2,1.2,1),p.visible=!1,a(p);let m={trigger:u,destination:new R(i,o,s),cooldown:0,sprite:p,texture:f,canvas:d};return r.push(m),m}let d=new q(new Hr(60,60),new Y({color:526360}));d.rotation.x=-Math.PI/2,d.receiveShadow=!0,a(d);let f=new Xi(60,22,1714762,1714762);f.position.y=.01,a(f);for(let[e,t]of[[-16,-16],[16,-16],[-16,16],[16,16]]){let n=new Ii(2245802,.4,18);n.position.set(e,.5,t),a(n)}c(0,2,0,5,.5,5,3359829),c(-11,2,-8,4,.5,4,3816021),c(11,2,-8,4,.5,4,3816021),c(-11,2,8,4,.5,4,3816021),c(11,3,8,4,.5,4,3816021),c(-7,6,0,3,.5,3,4478310),c(7,6,0,3,.5,3,4478310),c(0,7,-12,4,.5,4,4469589),c(0,8,12,4,.5,4,4478259),c(-16,9,0,3,.5,6,3359795),c(16,9,0,3,.5,6,3359795),c(0,12,0,4,.5,4,5596791),c(-9,15,-9,3,.5,3,6706534),c(9,15,9,3,.5,3,6706534),c(0,18,0,3,.5,3,7833753),c(-5,4,-5,3,.5,3,3816038),c(5,4,-5,3,.5,3,3816038),c(-5,4,5,3,.5,3,3816038),c(5,4,5,3,.5,3,3816038),c(-9,4,0,3,.5,3,3818598),c(9,4,0,3,.5,3,3818598),c(0,4,-11,3,.5,3,3818598),c(0,4,11,3,.5,3,3818598),c(-9,7,-9,3,.5,3,4478310),c(9,7,9,3,.5,3,4478310),c(-9,7,9,3,.5,3,4478310),c(9,7,-9,3,.5,3,4478310),c(-18,6,8,3,.5,3,3359829),c(18,6,-8,3,.5,3,3359829),c(8,6,18,3,.5,3,3359829),c(-8,6,-18,3,.5,3,3359829),c(-5,13,-5,3,.5,3,5596808),c(5,13,5,3,.5,3,5596808),c(-5,13,5,3,.5,3,5596808),c(5,13,-5,3,.5,3,5596808),l(0,2.5,-3,5,1.5,.3,4478310),l(0,2.5,3,5,1.5,.3,4478310),l(-2,12.5,0,.3,2,4,6715272),l(2,12.5,0,.3,2,4,6715272);for(let[e,t,n]of[[-19,4,-19],[19,4,-19],[-19,4,19],[19,4,19]]){let r=new q(new Br(.3,.4,4,6),new Y({color:3359829}));r.position.set(e,t,n),a(r);let i=new Ii(4491519,.5,8);i.position.set(e,t+2.5,n),a(i)}let p=[new R(0,3,0),new R(-11,3,-8),new R(11,3,-8),new R(-11,3,8),new R(11,4,8),new R(-7,7,0),new R(7,7,0),new R(0,8,-12),new R(0,9,12),new R(-16,10,0),new R(16,10,0),new R(0,13,0),new R(-9,16,-9),new R(9,16,9),new R(0,19,0)],m=new hl(new R(-18,7,-14),new R(18,7,14),a,p),h=u(0,2.5,0,0,18.5,0),g=u(0,18.5,0,0,3,0);h.link=g,g.link=h;let _=u(-16,9.5,0,16,10,0),v=u(16,9.5,0,-16,10,0);_.link=v,v.link=_;let y=u(11,3.5,8,-9,15.5,-9),b=u(-9,15.5,-9,11,4,8);return y.link=b,b.link=y,{colliders:t,walls:n,teleporters:r,hazards:[m],boundary:30,gravity:-15,background:16,groundY:0,spawnPos:new R(0,3.5,0),dispose:()=>{e.fog=null,i.forEach(t=>e.remove(t))}}}var _l=class{constructor(e,t,n,r,i,a,o,s,c){this._state=`idle`,this._timer=3,this._shakeAccum=0,this.delta=new R,this._basePos=new R(e,t+i/2,n),this._mat=new Y({color:o}),this._mesh=new q(new J(r,i,a),this._mat),this._mesh.position.copy(this._basePos),this._mesh.castShadow=!0,this._mesh.receiveShadow=!0,s(this._mesh),this._collider=new G(new R(e-r/2,t,n-a/2),new R(e+r/2,t+i,n+a/2)),c.push(this._collider),this._colliders=c}isOnTop(e){if(this._state===`falling`)return!1;let t=this._collider;return e.y>=t.max.y-.15&&e.y<=t.max.y+.25&&e.x>=t.min.x-.25&&e.x<=t.max.x+.25&&e.z>=t.min.z-.25&&e.z<=t.max.z+.25}preUpdate(e,t){if(this.delta.set(0,0,0),this._state===`idle`){for(let e of t)if(!e.isEliminated&&this.isOnTop(e.position)){this._state=`triggered`,this._timer=3;break}return}if(this._state===`triggered`){this._timer-=e,this._shakeAccum+=e;let t=1-this._timer/3,n=t*.14,r=Math.sin(this._shakeAccum*22)*n;this._mesh.position.x=this._basePos.x+r;let i=2+t*12,a=Math.sin(this._shakeAccum*i*Math.PI*2)>0;if(this._mat.color.set(a?16720384:16746496),this._timer<=0){let e=this._colliders.indexOf(this._collider);e!==-1&&this._colliders.splice(e,1),this._state=`falling`}return}this._mesh.position.y-=18*e,this._mesh.rotation.x+=1.5*e,this._mesh.rotation.z+=.8*e}},vl=class{constructor(e,t,n,r,i){this._scene=e,this._fuse=-1,this._dead=!1,this._respawn=0,this._pos=new R(t,n,r),this._mesh=new pt;let a=new q(new Br(.35,.35,.9,12),new Y({color:8930304}));a.position.y=.45,this._mesh.add(a);let o=new q(new Wr(.36,.055,6,16),new K({color:16763904}));o.position.y=.55,o.rotation.x=Math.PI/2,this._mesh.add(o);let s=new q(new Ur(.25,8,8),new Y({color:13421772}));s.position.y=1,this._mesh.add(s),this._light=new Ii(16729088,0,8),this._light.position.y=1,this._mesh.add(this._light),this._mesh.position.copy(this._pos),i(this._mesh),e.add(this._mesh)}update(e,t){if(this._dead){this._respawn-=e,this._respawn<=0&&(this._dead=!1,this._fuse=-1,this._mesh.visible=!0,this._light.intensity=0);return}if(this._fuse<0){for(let e of t)if(!e.isEliminated&&e.position.distanceTo(this._pos)<2.2){this._fuse=.6;break}}else this._fuse-=e,this._light.intensity=4+Math.sin(this._fuse*30)*3,this._fuse<=0&&this._explode(t)}_explode(e){for(let t of e){if(t.isEliminated)continue;let e=t.position.distanceTo(this._pos);if(e>6)continue;let n=1-e/6,r=new R(t.position.x-this._pos.x,0,t.position.z-this._pos.z);r.length()>.01&&r.normalize(),t.velocity.x+=r.x*38*n,t.velocity.z+=r.z*38*n,t.velocity.y=Math.max(t.velocity.y,18*n),t.knockbackTimer=.6,t.tagImmunity=Math.max(t.tagImmunity,.6),t.hp=Math.max(0,t.hp-Math.round(30*n)),t.hp<=0&&!t.isEliminated&&t.setEliminated(!0)}let t=new Ii(16746496,14,18);t.position.copy(this._pos).y+=.8,this._scene.add(t),setTimeout(()=>this._scene.remove(t),300),this._dead=!0,this._respawn=6,this._mesh.visible=!1,this._light.intensity=0}};function yl(e){let t=[],n=[],r=[],i=[],a=[],o=[],s=[];function c(t){return e.add(t),s.push(t),t}function l(e,n,r,i,a,o,s){let l=new q(new J(i,a,o),new Y({color:s}));l.position.set(e,n+a/2,r),l.castShadow=!0,l.receiveShadow=!0,c(l),t.push(new G(new R(e-i/2,n,r-o/2),new R(e+i/2,n+a,r+o/2)))}function u(e,t,r,i,a,o,s){let l=new q(new J(i,a,o),new Y({color:s}));l.position.set(e,t+a/2,r),c(l),n.push(new G(new R(e-i/2,t,r-o/2),new R(e+i/2,t+a,r+o/2)))}function d(e,t,n,i,a,o){let s=new q(new Br(.7,.7,.15,16),new Y({color:61183,emissive:new W(26248)}));s.position.set(e,t+.08,n),c(s);let l=new q(new Wr(.85,.08,8,24),new K({color:65535}));l.position.set(e,t+.15,n),l.rotation.x=Math.PI/2,c(l);let u=document.createElement(`canvas`);u.width=128,u.height=128;let d=new Ir(u),f=new Ln(new Cn({map:d,transparent:!0,depthTest:!1}));f.position.set(e,t+1.6,n),f.scale.set(1.2,1.2,1),f.visible=!1,c(f);let p={trigger:new G(new R(e-.7,t,n-.7),new R(e+.7,t+.5,n+.7)),destination:new R(i,a,o),cooldown:0,sprite:f,texture:d,canvas:u};return r.push(p),p}function f(t,n,r){o.push(new vl(e,t,n,r,c))}l(0,0,0,40,1,40,1977658),l(0,1,0,10,.5,10,2768466);for(let[e,t]of[[-3,-3],[3,-3],[-3,3],[3,3]])l(e,1.5,t,2,.5,2,3559270);let p=3031637;u(-12,1,-20,10,1.5,.4,p),u(12,1,-20,10,1.5,.4,p),u(-12,1,20,10,1.5,.4,p),u(12,1,20,10,1.5,.4,p),u(-20,1,-12,.4,1.5,10,p),u(-20,1,12,.4,1.5,10,p),u(20,1,-12,.4,1.5,10,p),u(20,1,12,.4,1.5,10,p);for(let[e,t]of[[-8,0],[8,0],[0,-8],[0,8],[-12,12],[12,-12],[-12,-12],[12,12]])f(e,1,t);for(let[e,t]of[[-34,0],[34,0],[0,-34],[0,34]])l(e,0,t,7,1,7,1318958),f(e,1,t);for(let[e,t]of[[30,30],[-30,30],[30,-30],[-30,-30]])l(e,0,t,6,1,6,1186856);let[m,h]=[d(-34,1,0,34,1.1,0),d(34,1,0,-34,1.1,0)];m.link=h,h.link=m;let[g,_]=[d(0,1,-34,0,1.1,34),d(0,1,34,0,1.1,-34)];g.link=_,_.link=g;for(let[e,t]of[[-57,0],[57,0],[0,-57],[0,57]])l(e,0,t,7,1,7,923424),f(e,1,t);for(let[e,t]of[[48,48],[-48,48],[48,-48],[-48,-48]])l(e,0,t,6,1,6,1054751);for(let[e,t]of[[-57,21],[-57,-21],[57,21],[57,-21],[21,-57],[-21,-57],[21,57],[-21,57]])l(e,0,t,4,1,4,989216);let[v,y]=[d(-57,1,0,57,1.1,0),d(57,1,0,-57,1.1,0)];v.link=y,y.link=v;let[b,x]=[d(0,1,-57,0,1.1,57),d(0,1,57,0,1.1,-57)];b.link=x,x.link=b;for(let[e,t]of[[-81,0],[81,0],[0,-81],[0,81]])l(e,0,t,8,1,8,725529),f(e,1,t);for(let[e,t]of[[68,68],[-68,68],[68,-68],[-68,-68]])l(e,0,t,6,1,6,857374);for(let[e,t]of[[-81,26],[-81,-26],[81,26],[81,-26],[26,-81],[-26,-81],[26,81],[-26,81]])l(e,0,t,5,1,5,791320);let[S,C]=[d(-81,1,0,81,1.1,0),d(81,1,0,-81,1.1,0)];S.link=C,C.link=S;let[w,T]=[d(0,1,-81,0,1.1,81),d(0,1,81,0,1.1,-81)];w.link=T,T.link=w;for(let[e,t]of[[-104,0],[104,0],[0,-104],[0,104]])l(e,0,t,9,1,9,593946),f(e,1,t);for(let[e,t]of[[88,88],[-88,88],[88,-88],[-88,-88]])l(e,0,t,7,1,7,659992);for(let[e,t]of[[-104,31],[-104,-31],[104,31],[104,-31],[31,-104],[-31,-104],[31,104],[-31,104]])l(e,0,t,5,1,5,594202);for(let[e,t]of[[104,36],[-104,36],[104,-36],[-104,-36],[36,104],[-36,104],[36,-104],[-36,-104]])l(e,0,t,4,1,4,593688);let[E,D]=[d(-104,1,0,0,1.1,0),d(104,1,0,0,1.1,0)];E.link=D,D.link=E;let[O,ee]=[d(0,1,-104,0,1.1,0),d(0,1,104,0,1.1,0)];O.link=ee,ee.link=O;for(let[e,t]of[[29,14],[-29,14],[29,-14],[-29,-14],[14,29],[-14,29],[14,-29],[-14,-29]])l(e,0,t,4,1,4,1253420);for(let[e,t]of[[44,22],[-44,22],[44,-22],[-44,-22],[22,44],[-22,44],[22,-44],[-22,-44]])l(e,0,t,4,1,4,989730);for(let[e,t]of[[52,29],[-52,29],[52,-29],[-52,-29],[29,52],[-29,52],[29,-52],[-29,-52]])l(e,0,t,4,1,4,923680);for(let[e,t]of[[68,34],[-68,34],[68,-34],[-68,-34],[34,68],[-34,68],[34,-68],[-34,-68]])l(e,0,t,4,1,4,791836);for(let[e,t]of[[73,39],[-73,39],[73,-39],[-73,-39],[39,73],[-39,73],[39,-73],[-39,-73]])l(e,0,t,5,1,5,725786);for(let[e,t]of[[91,47],[-91,47],[91,-47],[-91,-47],[47,91],[-47,91],[47,-91],[-47,-91]])l(e,0,t,4,1,4,594202);for(let[e,t]of[[96,52],[-96,52],[96,-52],[-96,-52],[52,96],[-52,96],[52,-96],[-52,-96]])l(e,0,t,4,1,4,528410);l(0,1.5,0,2,10,2,2439240),l(0,11.5,0,12,.5,12,1716304),f(4,12,4),f(-4,12,4),f(4,12,-4),f(-4,12,-4);for(let[e,t]of[[20,0],[-20,0],[0,20],[0,-20]])l(e,6,t,5,.4,5,2766165),f(e,6.4,t);for(let[e,t]of[[15,15],[-15,15],[15,-15],[-15,-15]])l(e,12,t,4.5,.4,4.5,1976384);for(let[e,t]of[[30,0],[-30,0],[0,30],[0,-30]])l(e,5,t,4,.4,4,1714746);for(let[e,t]of[[22,22],[-22,22],[22,-22],[-22,-22]])l(e,9,t,4,.4,4,1846592);for(let[e,t]of[[8,0],[-8,0],[0,8],[0,-8]])l(e,16,t,3.5,.4,3.5,1582392),f(e,16.4,t);l(0,20,0,6,.4,6,1714752),f(2,20.4,2),f(-2,20.4,-2),i.push(new ll(new R(-14,7,0),new R(14,7,0),5,.4,5,2250154,4,c,t)),i.push(new ll(new R(0,5.5,-14),new R(0,5.5,14),4,.4,4,2250035,6,c,t)),i.push(new ll(new R(24,1,0),new R(24,10,0),4,.4,4,5583650,3,c,t)),i.push(new ll(new R(-24,1,0),new R(-24,10,0),4,.4,4,5583650,3.5,c,t)),i.push(new ll(new R(-16,11,10),new R(16,11,10),4,.4,4,3359846,5,c,t)),i.push(new ll(new R(0,4,-36),new R(0,4,36),5,.4,5,1979204,9,c,t)),i.push(new ll(new R(-26,3,-26),new R(26,3,26),4,.4,4,2241314,7,c,t)),i.push(new ll(new R(-57,2,0),new R(-34,2,0),4,.4,4,3359778,5,c,t)),i.push(new ll(new R(34,2,0),new R(57,2,0),4,.4,4,3359778,5,c,t)),i.push(new ll(new R(0,2,-57),new R(0,2,-34),4,.4,4,4465203,6,c,t)),i.push(new ll(new R(81,2,0),new R(104,2,0),4,.4,4,3359795,6,c,t)),i.push(new ll(new R(-104,2,0),new R(-81,2,0),4,.4,4,3359795,6,c,t)),i.push(new ll(new R(0,2,81),new R(0,2,104),4,.4,4,3359795,7,c,t)),i.push(new ll(new R(29,2,14),new R(44,2,22),4,.4,4,1979170,5,c,t)),i.push(new ll(new R(-14,2,-29),new R(-22,2,-44),4,.4,4,1979170,5,c,t)),i.push(new ll(new R(68,2,34),new R(73,2,39),4,.4,4,2241348,6,c,t)),i.push(new ll(new R(-20,14,-20),new R(20,14,20),4,.4,4,2245802,8,c,t));let k=3812894,te=2760752,ne=1972776,A=1314848,re=.4;for(let[e,n]of[[27,0],[-27,0],[0,27],[0,-27]])a.push(new _l(e,1,n,3,re,3,k,c,t));for(let[e,n]of[[18,18],[-18,18],[18,-18],[-18,-18]])a.push(new _l(e,1,n,3,re,3,k,c,t));for(let[e,n]of[[26,26],[-26,26],[26,-26],[-26,-26]])a.push(new _l(e,1,n,3,re,3,k,c,t));for(let[e,n]of[[46,0],[-46,0],[0,46],[0,-46]])a.push(new _l(e,1,n,3,re,3,te,c,t));for(let[e,n]of[[39,39],[-39,39],[39,-39],[-39,-39]])a.push(new _l(e,1,n,3,re,3,te,c,t));for(let[e,n]of[[68,0],[-68,0],[0,68],[0,-68]])a.push(new _l(e,1,n,3,re,3,ne,c,t));for(let[e,n]of[[57,57],[-57,57],[57,-57],[-57,-57]])a.push(new _l(e,1,n,3,re,3,ne,c,t));for(let[e,n]of[[91,0],[-91,0],[0,91],[0,-91]])a.push(new _l(e,1,n,3,re,3,A,c,t));for(let[e,n]of[[78,78],[-78,78],[78,-78],[-78,-78]])a.push(new _l(e,1,n,3,re,3,A,c,t));for(let[e,t,n,r]of[[-8,6,8,4482815],[8,6,8,16729190],[-8,6,-8,4521864],[8,6,-8,16755234],[0,14,0,8956671],[0,22,0,16777215],[28,5,0,16737843],[-28,5,0,3386111],[0,5,28,4521864],[0,5,-28,16729258],[46,3,0,16763904],[-46,3,0,52479],[0,3,46,13387007],[0,3,-46,4521932],[65,3,0,16729088],[-65,3,0,35071],[0,3,65,4521796],[82,3,0,16755200]]){let i=new Ii(r,1.5,30);i.position.set(e,n,t),c(i);let a=new q(new Ur(.15,6,6),new K({color:r}));a.position.set(e,n,t),c(a)}let ie=new K({color:8952268});for(let e=0;e<450;e++){let e=new q(new J(.07,.07,.07),ie),t=Math.random()*Math.PI*2,n=40+Math.random()*180;e.position.set(Math.cos(t)*n,-(2+Math.random()*80),Math.sin(t)*n),c(e)}return{colliders:t,walls:n,teleporters:r,movingPlatforms:i,fallingPlatforms:a,hazards:o,boundary:135,botBoundary:16,spawnPos:new R(0,3,0),botSpawnY:2.5,gravity:-28,background:1296,groundY:-200,fallDeathY:-10,voidBoundary:110,dispose:()=>s.forEach(t=>e.remove(t))}}var bl=class{constructor(e,t,n,r,i,a,o){this._falling=!1,this._fallen=!1,this._vy=0,this._size=r,this._walls=o,this._timer=Math.random()<.65?8+Math.random()*50:1/0,this._vx=(Math.random()-.5)*2.5,this._vz=(Math.random()-.5)*2.5;let s=new q(new J(r,r,r),new Y({color:i}));s.position.set(e,t+r/2,n),s.castShadow=!0,a(s),this._mesh=s}update(e,t){if(this._fallen||this._timer===1/0)return;if(!this._falling){this._timer-=e,this._timer<=0&&(this._falling=!0);return}this._vy+=30*e,this._mesh.position.y-=this._vy*e,this._mesh.position.x+=this._vx*e,this._mesh.position.z+=this._vz*e,this._mesh.rotation.z+=(this._vx>0?3.5:-3.5)*e,this._mesh.rotation.x+=(this._vz>0?2.5:-2.5)*e;let n=this._size/2;if(this._mesh.position.y<=n){this._mesh.position.y=n,this._fallen=!0;let e=this._mesh.position,t=this._size/2;this._walls.push(new G(new R(e.x-t,0,e.z-t),new R(e.x+t,this._size,e.z+t)))}}};function xl(e){let t=[],n=[],r=[],i=[],a=[];function o(t){return e.add(t),a.push(t),t}e.fog=new St(1314310,40,130),o(new Bi(16772829,.28));for(let e of[-22,0,22])for(let t of[-22,0,22]){let n=new Ii(16764040,1,32);n.position.set(e,9,t),o(n)}for(let[e,t]of[[-18,-18],[18,-18],[-18,18],[18,18],[0,-18],[0,18],[-18,0],[18,0]]){let n=new Ii(16768409,.85,22);n.position.set(e,15,t),o(n)}function s(e,r,i,a,s,c,l,u=!1){let d=new q(new J(a,s,c),new Y({color:l}));d.position.set(e,r+s/2,i),d.castShadow=!0,d.receiveShadow=!0,o(d),(u?n:t).push(new G().setFromObject(d))}function c(e,t,n,i,a,s){let c=new q(new Br(.7,.7,.15,16),new Y({color:16755200,emissive:new W(5583616)}));c.position.set(e,t+.08,n),o(c);let l=new q(new Wr(.85,.08,8,24),new K({color:16768324}));l.position.set(e,t+.16,n),l.rotation.x=Math.PI/2,o(l);let u=new Ii(16755200,.6,5);u.position.set(e,t+1,n),o(u);let d=document.createElement(`canvas`);d.width=128,d.height=128;let f=new Ir(d),p=new Ln(new Cn({map:f,transparent:!0,depthTest:!1}));p.position.set(e,t+1.8,n),p.scale.set(1.2,1.2,1),p.visible=!1,o(p);let m={trigger:new G(new R(e-.7,t,n-.7),new R(e+.7,t+.6,n+.7)),destination:new R(i,a,s),cooldown:0,sprite:p,texture:f,canvas:d};return r.push(m),m}function l(e,t,r){let a=1.4,c=5.2,l=.22;s(e,0,t,a,c+.5,r,3813416,!0),s(e,2.5,t,a+.3,l,r,5916720),s(e,c,t,a+.3,l,r,5916720);for(let n of[-r/2+.1,r/2-.1])s(e,c/2,t+n,a+.3,c,.18,3023896,!0);for(let a=-1;a<=1;a++){let s=.65+Math.random()*.45,u=t+r/3.2*a;i.push(new bl(e,c+l,u,s,9136404,o,n))}}function u(e,t,r){for(let n=0;n<5;n++)s(r===`x+`?e+n*2:e-n*2,n*2,t,2.1,2.05,4,3813416);let i=10.5,a=r===`x+`?1:-1;for(let r of[-2.2,2.2])n.push(new G(new R(Math.min(e,e+a*i)-.1,0,t+r-.15),new R(Math.max(e,e+a*i)+.1,6,t+r+.15)))}function d(e,t,n=3){for(let r=0;r<n;r++){let n=1.15-r*.05;s(e+(Math.random()-.5)*.25,r*1.15,t+(Math.random()-.5)*.25,n,1.15,n,[8018990,9136949,7032612][r%3])}}function f(e,t,r){let i=new pt,a=new q(new J(2.6,1.8,1.5),new Y({color:14518272}));a.position.y=.9,i.add(a);let s=new q(new J(.22,4.5,.22),new Y({color:13399808}));s.position.set(-1.2,2.25,0),i.add(s);for(let e of[-.42,.42]){let t=new q(new J(2.2,.13,.2),new Y({color:8947848}));t.position.set(.1,.38,e),i.add(t)}i.position.set(e,0,t),i.rotation.y=r,o(i),n.push(new G(new R(e-2.2,0,t-1.2),new R(e+2.2,2.6,t+1.2)))}let p=new q(new Hr(84,84),new Y({color:2433048}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,o(p);let m=new K({color:16755200});for(let e of[-22,-9,4,17,30]){let t=new q(new Hr(.18,42*1.8),m);t.rotation.x=-Math.PI/2,t.position.set(e,.01,0),o(t)}s(0,0,-42,84,16,.9,1840912,!0),s(0,0,42,84,16,.9,1840912,!0),s(-42,0,0,.9,16,84,1840912,!0),s(42,0,0,.9,16,84,1840912,!0);let h=new q(new Hr(84,84),new Y({color:1314826,side:1}));h.rotation.x=Math.PI/2,h.position.y=16,o(h),s(-20,0,0,30,4.5,.55,3024928,!0),s(20,0,0,30,4.5,.55,3024928,!0),s(-18,0,-18,32,3.5,.4,2761752,!0),s(18,0,18,32,3.5,.4,2761752,!0),s(-30,0,28,.4,4,18,2761752,!0),s(30,0,-28,.4,4,18,2761752,!0),s(32,0,-32,.5,5,20,2367512,!0),s(38,0,-24,12,5,.5,2367512,!0),s(-32,0,32,.5,5,20,2367512,!0),s(-38,0,24,12,5,.5,2367512,!0);for(let[e,t,n]of[[-12,-30,!1],[12,30,!1],[-38,-10,!0],[38,10,!0],[0,-30,!1],[0,30,!1]])n?s(e,0,t,.5,3,8,2760728,!0):s(e,0,t,8,3,.5,2760728,!0);for(let e of[-28,-14,0,14,28])l(e-.72,0,30),l(e+.72,0,30);for(let[e,t]of[[-36,-36],[36,-36],[-36,36],[36,36],[-10,-36],[10,-36],[-10,36],[10,36],[-36,10],[36,-10],[0,-36],[0,36],[-22,-26],[22,26]])d(e,t,2+(Math.random()>.5?1:0));f(-35,-10,Math.PI/5),f(35,10,-Math.PI/5),f(20,-35,Math.PI/2.5),s(0,0,40,14,1.5,5,3024928);for(let e of[-5,0,5])s(e,1.5,38,1.2,.6,.5,14518272);let g=33/2;s(-g,10,-g,23,.42,23,3024928),s(g,10,-g,23,.42,23,3024928),s(-g,10,g,23,.42,23,3024928),s(g,10,g,23,.42,23,3024928),s(0,10,0,2.2,.42,10,3682344),s(0,10,0,10,.42,2.2,3682344);let _=10.42;s(0,_,-28,56,1.1,.22,4472888,!0),s(0,_,28,56,1.1,.22,4472888,!0),s(-28,_,0,.22,1.1,56,4472888,!0),s(28,_,0,.22,1.1,56,4472888,!0),s(-20,_,-22,12,3.5,.3,2630678,!0),s(-25,_,-19,.3,3.5,6,2630678,!0),s(20,_,-22,12,3.5,.3,2630678,!0),s(22,_,-15,.3,3.5,14,2630678,!0),s(18,_,22,12,3.5,.3,2630678,!0),s(24,_,18,.3,3.5,8,2630678,!0),s(-18,_,22,12,3.5,.3,2630678,!0),s(-24,_,18,.3,3.5,8,2630678,!0),u(-38,-26,`x+`),u(38,-26,`x-`),u(-38,26,`x+`),u(38,26,`x-`);let v=c(-36,0,-36,36,1,36),y=c(36,0,36,-36,1,-36);v.link=y,y.link=v;let b=c(36,0,-36,-36,1,36),x=c(-36,0,36,36,1,-36);b.link=x,x.link=b;let S=c(20,_,-20,-20,_+1,20),C=c(-20,_,20,20,_+1,-20);S.link=C,C.link=S;let w=c(-20,_,-20,20,_+1,20),T=c(20,_,20,-20,_+1,-20);w.link=T,T.link=w;let E=c(-8,0,8,-16,_+1,16),D=c(-16,_,16,8,1,-8);E.link=D,D.link=E;let O=c(8,0,-8,16,_+1,-16),ee=c(16,_,-16,-8,1,8);return O.link=ee,ee.link=O,{colliders:t,walls:n,teleporters:r,hazards:i,boundary:42,gravity:-28,background:1314310,spawnPos:new R(0,1,0),dispose(){for(let t of a)e.remove(t),t.geometry&&t.geometry.dispose()}}}let Sl=1.3;var Cl=class{constructor(e,t,n,r,i){this._pulseT=0,this._stunTimers=new Map,this._cooldowns=new Map,this._cx=t,this._cz=r,this._groundY=n;let a=new pt;this._plateMat=new K({color:16724736});let o=new q(new Br(Sl,Sl,.08,16),this._plateMat);o.position.y=.04,a.add(o);let s=new q(new Wr(Sl+.05,.09,6,20),new K({color:16746496}));s.rotation.x=Math.PI/2,s.position.y=.1,a.add(s);let c=new K({color:16763904});for(let e of[Math.PI/4,-Math.PI/4]){let t=new q(new Br(.06,.06,Sl*1.3,4),c);t.rotation.z=e,t.position.y=.1,a.add(t)}let l=new Ii(16720384,.9,5);l.position.y=.6,a.add(l),a.position.set(t,n,r),i(a)}update(e,t){this._pulseT+=e*2.5;let n=.55+.45*Math.sin(this._pulseT);this._plateMat.color.setRGB(n,n*.05,0);for(let n of t){if(n.isEliminated)continue;let t=this._stunTimers.get(n)??0;if(t>0){let r=t-e;r<=0?(this._stunTimers.delete(n),n.isFrozen&&n.setFrozen(!1),this._cooldowns.set(n,9)):this._stunTimers.set(n,r);continue}let r=this._cooldowns.get(n)??0;if(r>0){this._cooldowns.set(n,r-e);continue}let i=n.position.x-this._cx,a=n.position.z-this._cz,o=i*i+a*a,s=n.position.y-this._groundY;o<=Sl*Sl&&s>=-.2&&s<=1.8&&(n.setFrozen(!0),this._stunTimers.set(n,3))}}};function wl(e){let t=[],n=[],r=[],i=[],a=[];function o(t){return e.add(t),a.push(t),t}e.fog=new St(1576970,30,110),o(new Bi(16750916,.22));let s=new zi(10062011,.35);s.position.set(15,30,10),o(s);function c(e,r,i,a,s,c,l,u=!1){let d=new q(new J(a,s,c),new Y({color:l}));d.position.set(e,r+s/2,i),d.castShadow=!0,d.receiveShadow=!0,o(d),(u?n:t).push(new G().setFromObject(d))}function l(e,t,r=7){let i=.7,a=new q(new Br(i,i*1.12,r,10),new Y({color:8022606}));a.position.set(e,r/2,t),a.castShadow=!0,o(a);let s=new q(new J(i*2.8,.5,i*2.8),new Y({color:9075294}));s.position.set(e,r+.25,t),o(s),n.push(new G(new R(e-i,0,t-i),new R(e+i,r,t+i)))}function u(e,t,n){let r=new q(new J(.2,.6,.2),new Y({color:5588002}));r.position.set(e,t+.3,n),o(r);let i=new q(new Ur(.2,6,6),new K({color:16737792}));i.position.set(e,t+.8,n),o(i);let a=new Ii(16737792,1.3,14);a.position.set(e,t+1,n),o(a)}function d(e,t){c(e,0,t,1,6,1,5917750,!0);let n=new q(new Vr(.6,1.5,4),new Y({color:13936704}));n.position.set(e,6.75,t),n.rotation.y=Math.PI/4,o(n),o(new Ii(16763972,.4,6)).position.set(e,7,t)}function f(e,t,n,i,a,s){let c=new q(new Br(.85,.85,.14,12),new Y({color:10061994,emissive:new W(2232627)}));c.position.set(e,t+.07,n),o(c);let l=new q(new Wr(1,.1,8,24),new K({color:11158783}));l.rotation.x=Math.PI/2,l.position.set(e,t+.15,n),o(l);let u=new Ii(11158783,.9,7);u.position.set(e,t+.9,n),o(u);let d=document.createElement(`canvas`);d.width=128,d.height=128;let f=new Ir(d),p=new Ln(new Cn({map:f,transparent:!0,depthTest:!1}));p.position.set(e,t+2,n),p.scale.set(1.3,1.3,1),p.visible=!1,o(p);let m={trigger:new G(new R(e-.85,t,n-.85),new R(e+.85,t+.6,n+.85)),destination:new R(i,a,s),cooldown:0,sprite:p,texture:f,canvas:d};return r.push(m),m}let p=new q(new Hr(76,76),new Y({color:4865580}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,o(p);let m=new Xi(76,30,3812894,3812894);m.position.y=.01,o(m),c(-22,0,-38,52,9,1.3,5918262,!0),c(22,0,-38,52,9,1.3,5918262,!0),c(0,6,-38,10,3,1.3,5918262,!0),c(0,0,38,76,9,1.3,5918262,!0),c(-38,0,0,1.3,9,76,5918262,!0),c(38,0,0,1.3,9,76,5918262,!0);for(let[e,t]of[[-28,-28],[28,-28],[-28,28],[28,28],[-28,0],[28,0],[0,-28],[0,28]])l(e,t,8),u(e,6,t+(t<0?1.5:-1.5));d(-32,-32),d(32,-32),d(-32,32),d(32,32);for(let e of[-1,1])c(e*22,0,-18,1.2,5,12,5918262,!0),c(e*22,0,18,1.2,5,12,5918262,!0),c(e*22,5,0,1.2,1,8,6970950,!1),c(-18,0,e*22,12,5,1.2,5918262,!0),c(18,0,e*22,12,5,1.2,5918262,!0),c(0,5,e*22,8,1,1.2,6970950,!1);for(let[e,t,n,r]of[[0,-28,26,14],[0,28,26,14],[-28,0,14,26],[28,0,14,26]])c(e,0,t,n,.18,r,5654584);c(0,0,0,12,2.2,12,6969920);for(let[e,t,n,r]of[[0,-6.5,8,1.2],[0,6.5,8,1.2],[-6.5,0,1.2,8],[6.5,0,1.2,8]])c(e,0,t,n,1.1,r,6049844),c(e,1.1,t,n*.82,1.1,r*.82,6049844);c(0,2.2,0,2.4,1.6,2.4,8944216),o(new Ii(16755268,1.8,14)).position.set(0,6,0);for(let[e,t]of[[-6,0],[6,0],[0,-6],[0,6]])u(e,2.2,t);for(let[e,t]of[[-10,-10],[10,-10],[-10,10],[10,10]])l(e-.9,t,8),l(e+.9,t,8),u(e,6.5,t+(t<0?-1.5:1.5));c(-20,0,-20,7,4,7,5654584),c(20,0,-20,7,4,7,5654584),c(-20,0,20,7,3.5,7,5654584),c(20,0,20,7,3.5,7,5654584),l(-20,-20,5),l(20,-20,5),l(-20,20,5),l(20,20,5);for(let[e,t,n,r]of[[-32,-10,1,0],[32,10,-1,0],[0,-32,0,1],[0,32,0,-1]])c(e,0,t,6,4,6,5128752,!1),c(e+n*3,0,t+r*3,n===0?7:.5,4,r===0?7:.5,4866096,!0);for(let[t,n,r]of[[22,0,0],[-22,0,0],[0,0,-22],[0,0,22],[28,0,-14],[-28,0,14],[14,0,28],[-14,0,-28],[-3,0,-10],[3,0,-10],[-3,0,10],[3,0,10]])i.push(new Cl(e,t,n,r,o));let h=f(-30,0,-30,30,1,30),g=f(30,0,30,-30,1,-30);h.link=g,g.link=h;let _=f(20,4,-20,-20,4.5,20),v=f(-20,3.5,20,20,5,-20);return _.link=v,v.link=_,{colliders:t,walls:n,teleporters:r,hazards:i,boundary:38,gravity:-28,background:1576970,spawnPos:new R(0,3,0),dispose(){for(let t of a)e.remove(t),t.geometry&&t.geometry.dispose()}}}function Tl(e){let t=[],n=[],r=[],i=[];function a(t){return e.add(t),i.push(t),t}e.fog=new St(13931578,70,180);let o=a(new q(new Hr(116,116),new Y({color:13148208})));o.rotation.x=-Math.PI/2,o.receiveShadow=!0;let s=a(new q(new Hr(116,116),new K({color:13937220,transparent:!0,opacity:.3})));s.rotation.x=-Math.PI/2,s.position.y=.01;function c(e,r,i,o,s,c,l){let u=a(new q(new J(i,o,s),new Y({color:c})));u.position.set(e,o/2,r),u.castShadow=!0,u.receiveShadow=!0,l?n.push(new G().setFromObject(u)):t.push(new G().setFromObject(u))}function l(e,n,r,i,o){c(e,n,r,o,i,10118680,!0);let s=a(new q(new J(r,.4,i),new Y({color:13142050})));s.position.set(e,o+.2,n),s.receiveShadow=!0,t.push(new G().setFromObject(s))}function u(e,t,n,r,i){c(e,t,n,i,r,8020548,!0)}function d(e,t){let r=5.5,i=a(new q(new Br(.45,.65,r,8),new Y({color:5912592})));i.position.set(e,r/2,t),i.castShadow=!0,n.push(new G(new R(e-.7,0,t-.7),new R(e+.7,r,t+.7)));let o=a(new q(new Br(3.2,1,1.2,8),new Y({color:3828240})));o.position.set(e,r+.8,t),o.castShadow=!0}function f(e,t,n,i,o){a(new q(new Br(.7,.7,.15,16),new Y({color:61183,emissive:new W(26248)}))).position.set(e,.08,t);let s=a(new q(new Wr(.85,.08,8,24),new K({color:65535})));s.position.set(e,.15,t),s.rotation.x=Math.PI/2;let c=document.createElement(`canvas`);c.width=128,c.height=128;let l=new Ir(c),u=a(new Ln(new Cn({map:l,transparent:!0,depthTest:!1})));u.position.set(e,1.6,t),u.scale.set(1.2,1.2,1),u.visible=!1;let d={trigger:new G(new R(e-.7,0,t-.7),new R(e+.7,.5,t+.7)),destination:new R(n,i,o),cooldown:0,sprite:u,texture:l,canvas:c};return r.push(d),d}l(-32,-28,14,11,5),l(30,-30,12,10,4.5),l(-30,28,11,13,4.5),l(32,26,13,10,5),u(0,0,5,10,2.5),u(0,9,10,4,2.5),u(0,-9,10,4,2.5);for(let[e,t,n,r,i]of[[-14,10,8,4,2.2],[14,-10,8,4,2.2],[-10,-14,4,8,2],[10,14,4,8,2],[-20,-4,6,3,1.8],[20,4,6,3,1.8],[4,18,3,7,1.8],[-4,-18,3,7,1.8],[-42,2,4,11,2.5],[42,-2,4,11,2.5],[2,-42,11,4,2.5],[-2,42,11,4,2.5],[-16,38,5,3,2],[16,-38,5,3,2],[38,-16,3,5,2],[-38,16,3,5,2]])u(e,t,n,r,i);for(let[e,t]of[[-7,-5],[7,5],[-5,7],[5,-7],[-22,18],[22,-18],[-20,-20],[20,20],[-44,12],[44,-12],[-12,44],[12,-44],[-36,6],[36,-6],[6,36],[-6,-36],[-50,28],[50,-28],[-28,50],[28,-50]])d(e,t);a(new q(new Br(5.5,5.5,.06,32),new Y({color:3828362,transparent:!0,opacity:.82}))).position.set(-6,.04,6);function p(e,t,r){let i=r*.38,o=a(new q(new Vr(i,r,7),new Y({color:9067552})));o.position.set(e,r/2,t),o.castShadow=!0,n.push(new G(new R(e-i,0,t-i),new R(e+i,r,t+i)))}p(-8,14,3.5),p(12,-10,4.2),p(-20,6,2.8),p(24,18,3.2),p(-34,-14,4.5),p(18,32,3),p(-24,-34,3.8),p(38,8,2.6);function m(e,t){let r=6.5,i=a(new q(new Br(1,1.5,r,8),new Y({color:8015912})));i.position.set(e,r/2,t),i.castShadow=!0,n.push(new G(new R(e-1.6,0,t-1.6),new R(e+1.6,r,t+1.6)));for(let n=0;n<5;n++){let i=n/5*Math.PI*2+.2,o=a(new q(new Br(.2,.38,2.4,5),new Y({color:6963232})));o.position.set(e+Math.cos(i)*1.4,r+.4,t+Math.sin(i)*1.4),o.rotation.z=Math.cos(i)*.55,o.rotation.x=Math.sin(i)*.55}let o=a(new q(new Ur(2.4,8,5),new Y({color:2774288})));o.position.set(e,r+2,t),o.castShadow=!0}m(-38,24),m(40,-22),m(8,-46),m(-10,46),m(48,14),m(-46,-18),l(28,-10,4,4,10),l(-26,10,4,4,9),u(-8,22,11,2,2.5),u(-8,20,2,6,2.5),u(8,-22,11,2,2.5),u(8,-20,2,6,2.5),u(22,-8,2,2.5,11),u(20,-8,6,2.5,2),u(-22,8,2,2.5,11),u(-20,8,6,2.5,2);let h=f(-52,-52,32,5.6,26),g=f(52,52,-32,5.6,-28);h.link=g,g.link=h;let _=f(52,-52,-30,5.1,28),v=f(-52,52,30,5.1,-30);return _.link=v,v.link=_,a(new zi(16764023,1.6)).position.set(40,60,30),{colliders:t,walls:n,teleporters:r,boundary:58,botBoundary:48,gravity:-28,background:13928490,dispose(){for(let t of i)e.remove(t),t.geometry?.dispose(),t.material?.dispose()}}}function El(e){let t=[],n=[],r=[],i=[];function a(t){return e.add(t),i.push(t),t}e.fog=new St(13164528,70,190);let o=a(new q(new Hr(124,124),new Y({color:14544632})));o.rotation.x=-Math.PI/2,o.receiveShadow=!0;let s=a(new q(new Br(18,18,.04,48),new Y({color:10472672,transparent:!0,opacity:.7})));s.position.y=.02;function c(e,t,r,i,o){let s=a(new q(new J(r,i,o),new Y({color:8960980,transparent:!0,opacity:.88})));s.position.set(e,i/2,t),s.castShadow=!0,n.push(new G().setFromObject(s))}function l(e,r,i,o,s){let c=a(new q(new J(i,s,o),new Y({color:7383752})));c.position.set(e,s/2,r),c.castShadow=!0,n.push(new G().setFromObject(c));let l=a(new q(new J(i,.35,o),new Y({color:12378352})));l.position.set(e,s+.175,r),l.receiveShadow=!0,t.push(new G().setFromObject(l))}function u(e,t,n,r){for(let i=0;i<n;i++){let a=i/n*Math.PI*2,o=r*(.4+Math.random()*.6),s=e+Math.cos(a)*o,l=t+Math.sin(a)*o,u=1.2+Math.random()*1.4,d=1+Math.random()*1.2;c(s,l,u,2.5+Math.random()*2.5,d)}c(e,t,1.4,5+Math.random()*2,1.4)}function d(e,t,n,i,o){a(new q(new Br(.7,.7,.15,16),new Y({color:61183,emissive:new W(26248)}))).position.set(e,.08,t);let s=a(new q(new Wr(.85,.08,8,24),new K({color:65535})));s.position.set(e,.15,t),s.rotation.x=Math.PI/2;let c=document.createElement(`canvas`);c.width=128,c.height=128;let l=new Ir(c),u=a(new Ln(new Cn({map:l,transparent:!0,depthTest:!1})));u.position.set(e,1.6,t),u.scale.set(1.2,1.2,1),u.visible=!1;let d={trigger:new G(new R(e-.7,0,t-.7),new R(e+.7,.5,t+.7)),destination:new R(n,i,o),cooldown:0,sprite:u,texture:l,canvas:c};return r.push(d),d}l(-34,-30,14,12,4),l(32,-32,12,11,3.5),l(-32,30,11,13,3.5),l(34,28,13,11,4),l(0,-36,10,8,3),l(0,36,8,10,3),u(-22,0,4,3),u(22,0,4,3),u(0,-22,4,3),u(0,22,4,3),u(-16,-16,3,2.5),u(16,16,3,2.5),u(-16,16,3,2.5),u(16,-16,3,2.5),u(-46,8,4,3.5),u(46,-8,4,3.5),u(8,-46,4,3.5),u(-8,46,4,3.5),u(-46,-30,3,2.5),u(46,30,3,2.5),u(-30,46,3,2.5),u(30,-46,3,2.5);for(let[e,t]of[[-8,0],[8,0],[0,-8],[0,8],[-42,0],[42,0],[0,-42],[0,42],[-28,-50],[28,50],[-50,28],[50,-28]])c(e,t,1.2,4.5,1.2);c(-42,-12,1.5,3,18),c(42,12,1.5,3,18),c(-12,-42,18,3,1.5),c(12,42,18,3,1.5);{let e=a(new q(new Ur(4.5,12,8,0,Math.PI*2,0,Math.PI/2),new Y({color:15660799})));e.position.set(-46,0,38),e.castShadow=!0,n.push(new G(new R(-50.5,0,33.5),new R(-41.5,4.5,42.5)));let t=a(new q(new J(2.6,2.8,3.5),new Y({color:14216959})));t.position.set(-46,1.4,32.2),t.castShadow=!0,n.push(new G().setFromObject(t)),a(new Ii(16750916,1,14)).position.set(-46,2.5,38)}function f(e,t,r,i,o){let s=a(new q(new J(r,i,o),new Y({color:15660543})));s.position.set(e,i/2,t),s.castShadow=!0,n.push(new G().setFromObject(s))}f(-14,-5,14,1.8,2.5),f(14,5,14,1.8,2.5),f(-5,-18,2.5,1.8,14),f(5,18,2.5,1.8,14),f(-32,16,8,2.2,2.5),f(32,-16,8,2.2,2.5),f(16,-32,2.5,2.2,8),f(-16,32,2.5,2.2,8),c(0,-42,7,20,3),c(5,-40,3,24,2.5),c(-5,-44,3,16,2.5),c(0,-38,4,22,1.8),c(0,42,7,18,3),c(-5,40,3,22,2.5),c(5,44,3,14,2.5),a(new Ii(4521864,1.4,240)).position.set(-20,90,-20),a(new Ii(2250239,.7,220)).position.set(20,95,20);let p=d(-56,-56,34,4.35,28),m=d(56,56,-34,4.35,-30);p.link=m,m.link=p;let h=d(56,-56,-32,3.85,30),g=d(-56,56,32,3.85,-32);return h.link=g,g.link=h,a(new zi(13430015,1.4)).position.set(-30,60,-20),{colliders:t,walls:n,teleporters:r,boundary:62,botBoundary:52,gravity:-28,background:11062496,dispose(){for(let t of i)e.remove(t),t.geometry?.dispose(),t.material?.dispose()}}}function Dl(e){let t=[],n=[],r=[],i=[];function a(t){return e.add(t),i.push(t),t}e.fog=new xt(656918,.048);let o=a(new q(new Hr(76,76),new Y({color:1051656})));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,a(new Bi(3810640,1.1));function s(e,t,r,i,o,s){let c=a(new q(new J(r,i,o),new Y({color:s})));c.position.set(e,i/2,t),c.castShadow=!0,c.receiveShadow=!0,n.push(new G().setFromObject(c))}function c(e,n,r,i,o,c){s(e,n,r,o,i,c);let l=a(new q(new J(r,.3,i),new Y({color:c})));l.position.set(e,o+.15,n),t.push(new G().setFromObject(l))}function l(e,t,n=4.5){a(new q(new Br(.14,.18,.22,6),new Y({color:1842204}))).position.set(e,.11,t),a(new q(new Br(.055,.07,n,6),new Y({color:2236962}))).position.set(e,n/2,t),a(new q(new J(.06,.06,.65),new Y({color:2236962}))).position.set(e,n,t+.32),a(new q(new J(.36,.3,.36),new K({color:16768341}))).position.set(e,n-.22,t+.64),a(new q(new Br(.26,.26,.09,6),new Y({color:1842204}))).position.set(e,n-.05,t+.64),a(new Ii(16755268,5.336,22)).position.set(e,n-.3,t+.64)}function u(e,t,r=7){let i=a(new q(new Br(.18,.28,r,6),new Y({color:1839624})));i.position.set(e,r/2,t),i.castShadow=!0,n.push(new G(new R(e-.3,0,t-.3),new R(e+.3,r,t+.3)));for(let[n,i,o]of[[-.5,0,.4],[.5,0,-.4]]){let s=a(new q(new Br(.06,.1,2.5,5),new Y({color:1839624})));s.position.set(e+n*1.2,r*.72,t+i*1.2),s.rotation.z=o,s.castShadow=!0}}function d(e,t,r=.9,i=1.4,o=0){let s=a(new q(new J(r,i,.22),new Y({color:3815474})));s.position.set(e,i/2,t),s.rotation.y=o,s.castShadow=!0,s.receiveShadow=!0,n.push(new G().setFromObject(s))}let f=5.5,p=.5;s(0,-38,76,f,p,1710618),s(0,38,76,f,p,1710618),s(-38,0,p,f,76,1710618),s(38,0,p,f,76,1710618);let m=2959392,h=2235928,g=3.5,_=(12-g)/2;function v(e,r,i,o,s,c,l,u=!0){let d=a(new q(new J(o,s,c),new Y({color:l})));d.position.set(e,r+s/2,i),d.castShadow=!0,d.receiveShadow=!0,(u?n:t).push(new G().setFromObject(d))}s(-12/2+_/2,-14/2,_,7,.55,m),s(12/2-_/2,-14/2,_,7,.55,m),s(-12/2+_/2,14/2,_,7,.55,m),s(12/2-_/2,14/2,_,7,.55,m);let y=.95,b=1.9,x=.55,S=2760208;function C(e,t,n,r,i,o,s,c=!1,l=1){let u=a(new q(new J(r,i,o),c?new K({color:s,transparent:!0,opacity:l}):new Y({color:s})));return u.position.set(e,t,n),u}for(let e of[-12/2,12/2]){let t=14/2-y,n=(14/2+y)/2;s(e,-n,x,7,t,m),s(e,n,x,7,t,m),v(e,b,0,x,7-b,y*2,m);let r=e+(e<0?x/2-.06:-(x/2-.06));for(let t of[-4.2,4.2])C(r,3,t,.08,2,1.35,1714756,!0,.7),C(e,4.06,t,x+.1,.18,1.55,S),C(e,1.94,t,x+.1,.18,1.55,S),C(e,3,t-.75,x+.1,2.38,.16,S),C(e,3,t+.75,x+.1,2.38,.16,S),C(e,3,t,x+.1,.12,1.35,S);C(e,b+.13,0,x+.1,.26,y*2+.1,S),C(e,b/2,-(y+.05),x+.1,b,.15,S),C(e,b/2,y+.05,x+.1,b,.15,S);let i=e+(e<0?-(x/2+.09):x/2+.09);[[.55,.38],[1.35,-.3],[.92,.12]].forEach(([e,t])=>{let n=a(new q(new J(.16,.11,y*2+.3),new Y({color:3812378})));n.position.set(i,e,0),n.rotation.z=t}),[[-.45,.25],[.32,1.38],[.05,.88]].forEach(([e,t])=>{let n=a(new q(new J(.07,.28,.15),new K({color:8956620,transparent:!0,opacity:.55})));n.position.set(i,t,e),n.rotation.z=e*1.4})}v(0,5.6,-14/2,g+.3,1.4,.6,m),v(0,5.6,14/2,g+.3,1.4,.6,m),C(-g/2-.16,7/2,-14/2,.32,7,.42,S),C(g/2+.16,7/2,-14/2,.32,7,.42,S);let w=5.5,T=a(new pt);T.position.set(-g/2,0,-14/2),T.rotation.y=Math.PI/5;let E=new q(new J(g-.15,w,.12),new Y({color:3811346}));E.position.set((g-.15)/2,w/2,0),T.add(E);for(let e=.35;e<w;e+=.75){let t=new q(new J(g-.25,.06,.14),new Y({color:3022864}));t.position.set((g-.15)/2,e,-.13),T.add(t)}for(let e of[-5,0,5])v(-12/2-.55,0,e,.55,7*.85,1.4,m),v(6.55,0,e,.55,7*.85,1.4,m);c(0,0,12,14,7,h);let D=4.2,O=4.2;v(0,7,-O/2,D,5,.5,m),v(0,7,O/2,D,5,.5,m),v(-D/2,7,0,.5,5,O,m),v(D/2,7,0,.5,5,O,m),v(0,12,0,D,.35,O,h,!1);let ee=a(new q(new Br(0,2,5.5,4),new Y({color:1708560})));ee.position.set(0,15.1,0),ee.rotation.y=Math.PI/4;let k=17.85;a(new q(new J(.2,2.6,.2),new Y({color:3811864}))).position.set(0,k+1.3,0),a(new q(new J(1.8,.2,.2),new Y({color:3811864}))).position.set(0,k+1.8,0),l(0,0,2.2),a(new Ii(16746547,2.5,20)).position.set(0,3.5,0),c(-18,-14,6,3,1.2,1576968),c(16,12,5,3,1,1576968),c(-14,18,3,6,1.2,1576968),c(20,-16,3,5,1,1576968);for(let[e,t,n,r,i]of[[-24,-20],[-22,-18,.8,1.2,.2],[-26,-22,1.1,1.5,-.1],[-20,-24,.7,1.1,.3],[-28,-18,1,1.6,.1],[22,-18],[24,-22,.8,1.2,-.2],[20,-20,1,1.5,.15],[26,-24,.7,1.1,.2],[28,-18,1.1,1.4,-.1],[-22,20],[-24,22,1,1.3,.1],[-20,24,.8,1.6,-.2],[-28,22,.7,1.1,.3],[-26,18,1.1,1.5,-.1],[22,20],[24,22,.9,1.2,.2],[20,24,1.1,1.5,-.15],[28,22,.7,1.1,.1],[26,18,1,1.4,-.2],[-8,-28,.8,1.2],[8,-28,1,1.5,.2],[0,-32,.9,1.3,-.1],[-8,28,.8,1.2],[8,28,1,1.5,.2],[0,32,.9,1.3,.1],[-32,-6],[32,-6,.9,1.5,.1],[-32,8,1.1,1.3],[32,8]])d(e,t,n,r,i);s(-14,-12,.3,4,10,1973790),s(14,-12,.3,4,10,1973790),s(-14,12,.3,4,10,1973790),s(14,12,.3,4,10,1973790),s(-10,-2,4,3.5,.3,1973790),s(-10,2,4,3.5,.3,1973790),s(10,-2,4,3.5,.3,1973790),s(10,2,4,3.5,.3,1973790),s(-18,-20,8,3.5,.5,2893860),s(-22,-17,.5,3.5,6,2893860),s(18,-20,8,3.5,.5,2893860),s(22,-17,.5,3.5,6,2893860),s(-18,20,8,3.5,.5,2893860),s(-22,17,.5,3.5,6,2893860),s(18,20,8,3.5,.5,2893860),s(22,17,.5,3.5,6,2893860),s(24,-7,.5,2.2,8,145e4),s(24,7,.5,2.2,8,145e4),s(-24,-7,.5,2.2,8,145e4),s(-24,7,.5,2.2,8,145e4),s(-9,-22,8,2.2,.5,145e4),s(9,-22,8,2.2,.5,145e4),s(-9,22,8,2.2,.5,145e4),s(9,22,8,2.2,.5,145e4);for(let[e,t]of[[-4,-15],[0,-15],[4,-15],[-4,15],[0,15],[4,15],[-15,-4],[-15,0],[-15,4],[15,-4],[15,0],[15,4],[-8,-8],[8,8],[-8,8],[8,-8]])d(e,t,.9,1.4);s(-6,-8,6,3,.4,2893860),s(-10,-6,.4,3,8,2893860),s(6,-8,6,3,.4,2893860),s(10,-6,.4,3,8,2893860),s(-6,8,6,3,.4,2893860),s(-10,6,.4,3,8,2893860),s(6,8,6,3,.4,2893860),s(10,6,.4,3,8,2893860),s(-28,0,.4,4.5,12,2761760),s(28,0,.4,4.5,12,2761760),s(0,-28,12,4.5,.4,2761760),s(0,28,12,4.5,.4,2761760),s(-28,-10,.4,4.5,8,2761760),s(-28,10,.4,4.5,8,2761760),s(28,-10,.4,4.5,8,2761760),s(28,10,.4,4.5,8,2761760);for(let[e,t,n]of[[-5,-20,.1],[5,-20,-.1],[-5,20,.2],[5,20,-.2],[-20,-5,0],[-20,5,.15],[20,-5,0],[20,5,-.1],[-2,-10,.05],[2,10,-.05],[-10,2,.1],[10,-2,-.1]])d(e,t,1.1,.7,n);return u(-12,-10,7),u(12,10,8),u(-10,12,6.5),u(10,-12,7.5),u(-30,-10,8),u(30,10,7),u(-10,30,8),u(10,-30,7),l(-16,-2),l(16,2),l(-2,16),l(2,-16),l(-28,28),l(28,-28),l(-20,-20),l(20,20),l(-2.5,-10.5),l(2.5,-10.5),l(-2.5,10.5),l(2.5,10.5),l(-9.5,0),l(9.5,0),l(-22,-5),l(22,5),l(5,-22),l(-5,22),l(-22,12),l(22,-12),s(-5,-13,7,3,.4,2630686),s(-8,-9,.4,3,7,2630686),s(5,-13,7,3,.4,2630686),s(8,-9,.4,3,7,2630686),s(-5,13,7,3,.4,2630686),s(-8,9,.4,3,7,2630686),s(5,13,7,3,.4,2630686),s(8,9,.4,3,7,2630686),s(-21,-5,.4,3,8,2630686),s(-21,5,.4,3,8,2630686),s(21,-5,.4,3,8,2630686),s(21,5,.4,3,8,2630686),s(-5,-21,8,3,.4,2630686),s(5,-21,8,3,.4,2630686),s(-5,21,8,3,.4,2630686),s(5,21,8,3,.4,2630686),{colliders:t,walls:n,teleporters:r,boundary:38,botBoundary:30,gravity:-28,background:656918,dispose(){for(let t of i)e.remove(t),t.geometry?.dispose(),t.material?.dispose()}}}let Ol=[`Alpha`,`Bravo`,`Charlie`],kl=[ul,ml,gl,yl,xl,wl,Tl,El,Dl],Al=[`Grasslands`,`Retro City`,`Space Ruins`,`Void Arena`,`Warehouse`,`Temple`,`Savanna`,`Arctic`,`Graveyard`],jl=[new Ic,new Lc,new Bc,new tl,new rl,new sl,new cl];var Ml=class{get roundId(){return this._roundId}constructor(e,t,n,r,i,a){this._scene=e,this._player=t,this._timerEl=n,this._modeEl=r,this._statusEl=i,this._overlayEl=a,this._timer=60,this._roundId=0,this._mapIdx=0,this._modeIdx=0,this._transitioning=!1,this._allEntities=[],this._transitionTimer=0,this._currentMap=null,this._bots=[],this._mode=jl[0],this._adminMapIdx=null,this._adminModeIdx=null,this.isAdmin=!1,this.isLocalAuthority=!0,this._nonHostWaiting=!1}get bots(){return this._bots}get map(){return this._currentMap}get mode(){return this._mode}get mapNames(){return Al}get modeNames(){return jl.map(e=>e.name)}get nextMapIdx(){return this._adminMapIdx??this._mapIdx}get nextModeIdx(){return this._adminModeIdx??this._modeIdx}get mapIdx(){return this._mapIdx}get modeIdx(){return this._modeIdx}get timer(){return this._timer}get isTransitioning(){return this._transitioning}setNextMap(e){this._adminMapIdx=e}setNextMode(e){this._adminModeIdx=e}syncTimer(e){this._timer=e}jumpToRound(e,t,n,r){this._transitioning=!1,this._nonHostWaiting=!1,this._overlayEl.style.display=`none`,this._mapIdx=e,this._modeIdx=t,this._roundId=n-1,this._buildRound(),this._timer=r}startRound(){try{this._buildRound()}catch(e){document.body.innerHTML+=`<div style="position:fixed;top:0;left:0;width:100%;background:red;color:white;font-size:20px;z-index:99999;padding:20px;font-family:monospace;white-space:pre-wrap;">CRASH IN _buildRound:\n${e}</div>`}}forceEndRound(){this._timer=0}update(e,t){if(this._transitioning){this._transitionTimer-=e;let t=document.getElementById(`adm-countdown`);if(t&&(t.textContent=String(Math.max(1,Math.ceil(this._transitionTimer)))),this._transitionTimer<=0){this._transitioning=!1,this._overlayEl.style.display=`none`;try{this._buildRound()}catch(e){document.body.innerHTML+=`<div style="position:fixed;top:0;left:0;width:100%;background:red;color:white;font-size:20px;z-index:99999;padding:20px;font-family:monospace;white-space:pre-wrap;">CRASH IN _buildRound:\n${e}</div>`}}return}this._timer-=e;let n=Math.max(0,Math.ceil(this._timer));this._timerEl.textContent=String(n),this._timerEl.style.color=n<=10?`#ff4444`:`#ffffff`,this._allEntities=t;let r=this._timer<=10;for(let e of t)e.speedBoost=r&&e.isIt?1.4:1;if(this._modeEl.textContent=this._mode.name,this._statusEl.textContent=this._mode.getHud(this._player,t),this._mode.update(e,t,this._currentMap?.teleporters),this._currentMap?.hazards)for(let n of this._currentMap.hazards)n.update(e,t);let i=this._currentMap?.fallDeathY;if(i!==void 0)for(let e of t)!e.isEliminated&&e.position.y<i&&(console.warn(`[fallDeath] entity eliminated at y=${e.position.y.toFixed(2)}, fallDeathY=${i}`),e.setEliminated(!0));if(this._timer<=0||this._mode.isRoundOver(t))if(this.isLocalAuthority){let e=t.filter(e=>!e.isEliminated);console.log(`[RoundOver] timer=${this._timer.toFixed(1)}, active=${e.length}`),this._startTransition()}else this._timer=0,this._nonHostWaiting||(this._nonHostWaiting=!0,this._overlayEl.innerHTML=`
            <div style="font-size:2.5rem;font-weight:bold">ROUND OVER!</div>
            <div style="margin-top:12px;font-size:1rem;color:#888">Waiting for next round…</div>`,this._overlayEl.style.display=`flex`)}updateTeleporters(e,t,n,r){let i=this._currentMap;if(i){for(let a of i.teleporters)if(a.cooldown>0&&(a.cooldown=Math.max(0,a.cooldown-e),r(a),a.cooldown===0&&(a.sprite.visible=!1)),a.cooldown===0&&a.trigger.containsPoint(t)){if(a.sabotaged&&!n.isIt){let e=(this._currentMap?.fallDeathY??-1/0)+2,t=this._allEntities.find(t=>t.isIt&&!t.isEliminated&&t.position.y>=e);t?(n.position.copy(t.position),n.position.y=Math.max(t.position.y+.1,e)):n.position.copy(a.destination),a.sabotaged=!1,a.sabotageProgress=0}else n.position.copy(a.destination);n.velocity.set(0,0,0),a.cooldown=5,a.link&&(a.link.cooldown=5),a.sprite.visible=!0,r(a),a.link&&(a.link.sprite.visible=!0,r(a.link))}}}_startTransition(){if(this._transitioning=!0,this._transitionTimer=5,this._adminModeIdx!==null)this._modeIdx=this._adminModeIdx,this._adminModeIdx=null;else{let e=this._modeIdx;for(let t=0;t<20;t++){let t=(this._modeIdx+1+Math.floor(Math.random()*(jl.length-1)))%jl.length;if(!(jl[t].rare&&Math.random()>.2)){e=t;break}}this._modeIdx=e}if(this._adminMapIdx!==null)this._mapIdx=this._adminMapIdx,this._adminMapIdx=null;else{let e=this._mapIdx;if(this._modeIdx===5)e=3;else if(this._modeIdx===6)e=8;else for(let t=0;t<20;t++){let t=(this._mapIdx+1+Math.floor(Math.random()*(kl.length-1)))%kl.length;if(!(t===3||t===8)){e=t;break}}this._mapIdx=e}this._renderAdminOverlay(),this._overlayEl.style.display=`flex`}_renderAdminOverlay(){let e=`margin:3px;padding:6px 10px;cursor:pointer;font-family:monospace;font-size:0.85rem;border:2px solid #555;background:#1a1a2e;color:#ccc;border-radius:4px;`,t=Al.map((t,n)=>`<button id="adm-map-${n}" style="${n===this._modeIdx&&this._adminMapIdx===n?`margin:3px;padding:6px 10px;cursor:pointer;font-family:monospace;font-size:0.85rem;border:2px solid #ffcc00;background:#2a2a00;color:#ffee66;border-radius:4px;font-weight:bold;`:e}" data-map="${n}">${t}</button>`).join(``),n=jl.map((t,n)=>`<button id="adm-mode-${n}" style="${e}" data-mode="${n}">${t.name}${t.rare?` ★`:``}</button>`).join(``),r=Al[this._adminMapIdx??this._mapIdx],i=jl[this._adminModeIdx??this._modeIdx].name,a=this.isAdmin?`
      <button id="adm-toggle" style="margin-top:14px;padding:5px 14px;cursor:pointer;font-family:monospace;font-size:0.75rem;border:1px solid #555;background:#111;color:#ffcc00;border-radius:4px;letter-spacing:1px;">⚙ ADMIN</button>
      <div id="adm-panel" style="display:none;margin-top:10px;padding:14px 20px;background:rgba(0,0,0,0.5);border:1px solid #444;border-radius:8px;max-width:560px">
        <div style="font-size:0.8rem;color:#ffcc00;letter-spacing:2px;margin-bottom:10px">PICK NEXT ROUND</div>
        <div style="font-size:0.75rem;color:#999;margin-bottom:4px">MAP</div>
        <div style="margin-bottom:10px">${t}</div>
        <div style="font-size:0.75rem;color:#999;margin-bottom:4px">MODE</div>
        <div>${n}</div>
        <div style="margin-top:10px;font-size:0.7rem;color:#666">Leave unselected to use the random pick.</div>
      </div>
      <div style="margin-top:10px;font-size:1rem;color:#888">Starting in <span id="adm-countdown">5</span>s…</div>
    `:`<div style="margin-top:12px;font-size:1rem;color:#888">Starting in <span id="adm-countdown">5</span>s…</div>`;this._overlayEl.innerHTML=`
      <div style="font-size:2.5rem;font-weight:bold">ROUND OVER!</div>
      <div id="adm-next" style="font-size:1.1rem;margin-top:8px;color:#aaddff">
        Next: <b>${i}</b> on <b>${r}</b>
      </div>
      ${a}`,this.isAdmin&&setTimeout(()=>{let e=document.getElementById(`adm-toggle`),t=document.getElementById(`adm-panel`);e&&t&&e.addEventListener(`click`,()=>{let n=t.style.display===`none`;t.style.display=n?`block`:`none`,e.style.background=n?`#2a2a00`:`#111`});for(let e=0;e<Al.length;e++){let t=document.getElementById(`adm-map-${e}`);t&&t.addEventListener(`click`,()=>{this._adminMapIdx=e,this._refreshAdminHighlights()})}for(let e=0;e<jl.length;e++){let t=document.getElementById(`adm-mode-${e}`);t&&t.addEventListener(`click`,()=>{this._adminModeIdx=e,this._refreshAdminHighlights()})}},0)}_refreshAdminHighlights(){let e=`margin:3px;padding:6px 10px;cursor:pointer;font-family:monospace;font-size:0.85rem;border:2px solid #555;background:#1a1a2e;color:#ccc;border-radius:4px;`,t=`margin:3px;padding:6px 10px;cursor:pointer;font-family:monospace;font-size:0.85rem;border:2px solid #ffcc00;background:#2a2a00;color:#ffee66;border-radius:4px;font-weight:bold;`;for(let n=0;n<Al.length;n++){let r=document.getElementById(`adm-map-${n}`);r&&(r.style.cssText=n===this._adminMapIdx?t:e)}for(let n=0;n<jl.length;n++){let r=document.getElementById(`adm-mode-${n}`);r&&(r.style.cssText=n===this._adminModeIdx?t:e)}let n=document.getElementById(`adm-next`);if(n){let e=Al[this._adminMapIdx??this._mapIdx];n.innerHTML=`Next: <b>${jl[this._adminModeIdx??this._modeIdx].name}</b> on <b>${e}</b>`}}_buildRound(){this._timer=60,this._roundId++,Pc(),console.log(`[RoundManager] _buildRound: mapIdx=${this._mapIdx}, modeIdx=${this._modeIdx}`),this._adminModeIdx!==null&&(this._modeIdx=this._adminModeIdx),this._adminMapIdx!==null&&(this._mapIdx=this._adminMapIdx),this._adminModeIdx=null,this._adminMapIdx=null,this._currentMap&&=(this._currentMap.dispose(),null);for(let e of this._bots)e.removeFromScene(this._scene);this._bots=[],this._currentMap=kl[this._mapIdx](this._scene);let{background:e,gravity:t}=this._currentMap;if(this._scene.background=new W(e),!(this._scene.fog instanceof xt)){let e=this._currentMap.groundY;this._scene.fog=e===void 0||e>=-10?new St(8900331,50,120):null}uc(t);let n=this._currentMap.spawnPos;this._player.position.set(n?.x??0,n?.y??3,n?.z??8),this._player.velocity.set(0,0,0),this._player.setEliminated(!1),this._player.setIt(!1),this._player.setFrozen(!1);let r=this._currentMap.botBoundary??this._currentMap.boundary;for(let e=0;e<3;e++){let t=new Fc(this._scene,Ol[e],r);if(this._currentMap.spawnPos){let n=this._currentMap.spawnPos,r=this._currentMap.botSpawnY??n.y,i=e/3*Math.PI*2;t.position.set(n.x+Math.cos(i)*1.5,r,n.z+Math.sin(i)*1.5),t.velocity.set(0,0,0)}console.log(`[Bot ${e}] spawned at`,t.position.x.toFixed(2),t.position.y.toFixed(2),t.position.z.toFixed(2)),this._bots.push(t)}this._mode=jl[this._modeIdx];let i=[this._player,...this._bots];this._mode.onStart(i)}};function Nl(e,t=`#aaaaaa`){let n=document.getElementById(`net-status`);n&&(n.textContent=e,n.style.color=t)}var Pl=class{constructor(){this.peerId=crypto.randomUUID(),this.roomCode=`LOCAL`}connect(e){Nl(`Offline · Bots enabled`,`#88ccff`)}sendState(e){}sendTag(e,t){}sendSetIt(e,t){}sendLeave(){}sendRoundSync(e,t,n,r){}};let Fl=15628032,Il=14487808,Ll=1.8;var Rl=class e{constructor(t,n,r){this.velocity=new R,this.isIt=!1,this.tagImmunity=0,this.isFrozen=!1,this.isEliminated=!1,this.isHuman=!0,this.speedBoost=1,this.knockbackTimer=0,this.hp=100,this.lives=3,this._targetPos=new R,this._lastSeen=0,this._walkCycle=0,this.peerId=n,this._scene=t,this._mesh=new pt,this._humanoid=hc(Fl),this._mesh.add(this._humanoid.group),this._itSprite=cc(),this._itSprite.position.set(0,Ll+.7,0),this._itSprite.visible=!1,this._mesh.add(this._itSprite),this._mesh.add(e._makeNameSprite(r)),this.position=this._mesh.position,this._targetPos.copy(this._mesh.position),t.add(this._mesh)}setIt(e){this.isIt=e,this._itSprite.visible=e,gc(this._humanoid,e?Il:Fl),this.tagImmunity=e?0:2}setFrozen(e){this.isFrozen=e,gc(this._humanoid,e?8969727:this.isIt?Il:Fl)}setEliminated(e){this.isEliminated=e,this._mesh.visible=!e}removeFromScene(e){this._scene.remove(this._mesh)}applyState(e){this._targetPos.set(e.x,e.y,e.z),this.velocity.set(e.vx,e.vy,e.vz),this._mesh.rotation.y=e.yaw,this._lastSeen=performance.now(),e.isFrozen!==this.isFrozen&&this.setFrozen(e.isFrozen),e.isEliminated!==this.isEliminated&&this.setEliminated(e.isEliminated)}update(e){this.position.lerp(this._targetPos,Math.min(1,12*e)),this.tagImmunity>0&&(this.tagImmunity=Math.max(0,this.tagImmunity-e));let t=Math.sqrt(this.velocity.x**2+this.velocity.z**2);this._walkCycle+=t*e*2.5,_c(this._humanoid,this._walkCycle,this.velocity.y>2,t>10,t,e)}get isStale(){return performance.now()-this._lastSeen>3e3}static _makeNameSprite(e){let t=document.createElement(`canvas`);t.width=256,t.height=64;let n=t.getContext(`2d`);n.fillStyle=`rgba(0,0,0,0.55)`,n.beginPath(),n.roundRect(4,4,t.width-8,t.height-8,10),n.fill(),n.fillStyle=`#ffcc88`,n.font=`bold 28px Arial`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,t.width/2,t.height/2);let r=new Ln(new Cn({map:new Ir(t),transparent:!0,depthTest:!1}));return r.scale.set(2.5,.6,1),r.position.set(0,Ll+.45,0),r}};let zl=2.6;var Bl=class{get isExpired(){return this._duration<=0}constructor(e,t,n,r){this._scene=e,this.radiusSq=zl*zl,this._duration=10,this._pulseT=0,this.x=t,this.z=r,this._mesh=new q(new Br(zl,zl,.07,20),new K({color:2284800,transparent:!0,opacity:.55})),this._mesh.position.set(t,n+.035,r),e.add(this._mesh),this._inner=new q(new Br(zl*.55,zl*.55,.08,14),new K({color:21760,transparent:!0,opacity:.75})),this._inner.position.set(t,n+.04,r),e.add(this._inner),this._light=new Ii(4521745,.8,6),this._light.position.set(t,n+.6,r),e.add(this._light)}update(e){if(this._duration-=e,this._duration<=0)return!1;this._pulseT+=e*3;let t=.55+.45*Math.sin(this._pulseT),n=Math.min(1,this._duration/2.5);return this._mesh.material.opacity=.55*n,this._inner.material.opacity=.75*n*t,this._light.intensity=.8*n,!0}containsXZ(e,t){let n=e-this.x,r=t-this.z;return n*n+r*r<=this.radiusSq}get slowFactor(){return .38}dispose(){this._scene.remove(this._mesh),this._scene.remove(this._inner),this._scene.remove(this._light),this._mesh.material.dispose(),this._inner.material.dispose(),this._mesh.geometry.dispose(),this._inner.geometry.dispose()}};let Vl=new Ct,Hl=new Mi(50,1,.01,10);Hl.position.set(0,0,0),Hl.lookAt(0,0,-1);let Ul=new Ii(16777215,1.5,6);Ul.position.set(.5,1,1),Vl.add(Ul),Vl.add(new Bi(16777215,.6));function Wl(e,t,n,r){return new q(new J(e,t,n),new Y({color:r}))}function Gl(e,t,n,r,i=8){let a=new q(new Br(e,t,n,i),new Y({color:r}));return a.rotation.x=Math.PI/2,a}function Kl(e,t){return new q(new Ur(e,8,8),new Y({color:t}))}function ql(){let e=new pt,t=Wl(.04,.55,.04,11197951);t.position.set(0,.22,0),e.add(t);let n=Wl(.26,.05,.06,8952251);n.position.set(0,-.04,0),e.add(n);let r=Wl(.05,.18,.05,5583650);r.position.set(0,-.16,0),e.add(r);let i=Kl(.045,6702131);return i.position.set(0,-.27,0),e.add(i),e}function Jl(){let e=new pt,t=Gl(.06,.06,.52,5596791);t.position.set(0,0,0),e.add(t);let n=Gl(.09,.06,.12,4478310);n.position.set(0,0,.32),e.add(n);let r=Wl(.03,.06,.04,3359829);r.position.set(0,.09,-.1),e.add(r);let i=Wl(.14,.02,.12,4478310);i.position.set(0,-.06,.2),e.add(i);let a=Wl(.02,.14,.12,4478310);return a.position.set(0,0,.2),e.add(a),e}function Yl(){let e=new pt,t=Gl(.035,.05,.5,2263244);e.add(t);let n=Kl(.07,8974079);n.position.set(0,0,-.28),e.add(n);let r=Kl(.04,11206655);r.position.set(0,0,-.28),e.add(r);for(let t=0;t<3;t++){let n=Gl(.055,.055,.04,1730201);n.position.set(0,0,.05+t*.09),e.add(n)}return e}function Xl(){let e=new pt,t=Gl(.025,.025,.44,2241314);t.position.set(0,.03,0),e.add(t);let n=Gl(.038,.025,.05,3359795);n.position.set(0,.03,-.22),e.add(n);let r=Wl(.1,.08,.22,1715738);r.position.set(0,0,.1),e.add(r);let i=Kl(.045,65348);i.position.set(0,.01,.22),e.add(i);let a=Kl(.028,8978346);a.position.set(0,.01,.22),e.add(a);let o=Wl(.07,.16,.07,1120785);o.position.set(0,-.1,.14),e.add(o);let s=Wl(.04,.04,.1,1715738);return s.position.set(0,-.06,.05),e.add(s),e}function Zl(){let e=new pt,t=Gl(.03,.03,.42,4478276);t.position.set(.035,0,0),e.add(t);let n=Gl(.03,.03,.42,4478276);n.position.set(-.035,0,0),e.add(n);let r=Wl(.12,.1,.18,3359795);r.position.set(0,-.02,.18),e.add(r);let i=Wl(.07,.09,.22,7029286);i.position.set(0,-.03,.35),e.add(i);let a=Wl(.1,.05,.06,2241314);return a.position.set(0,-.07,.06),e.add(a),e}function Ql(){let e=new pt,t=Wl(.15,.13,.18,8921634);t.position.set(0,0,-.02),e.add(t);for(let t=-1;t<=1;t++){let n=Wl(.04,.03,.13,16729088);n.position.set(t*.055,.06,-.13),e.add(n)}let n=Wl(.032,.11,.032,16768460);n.position.set(-.04,-.1,-.04),e.add(n);let r=Wl(.032,.11,.032,16768460);r.position.set(.04,-.1,-.04),e.add(r);let i=Kl(.06,16720384);return i.position.set(0,0,-.09),e.add(i),e}function $l(){let e=new pt,t=Wl(.03,.32,.03,13387007);t.position.set(0,.14,0),e.add(t);let n=Wl(.18,.04,.05,4460902);n.position.set(0,-.02,0),e.add(n);let r=Wl(.04,.14,.04,2228275);return r.position.set(0,-.12,0),e.add(r),e}let eu={sword:ql(),rocket:Jl(),freeze:Yl(),shotgun:Zl(),blaster:Xl(),bite:Ql(),dagger:$l()},tu={sword:{pos:[.28,-.3,-.55],rot:[.1,.5,-.2]},rocket:{pos:[.25,-.28,-.6],rot:[.05,.45,0]},freeze:{pos:[.26,-.28,-.58],rot:[.05,.4,0]},shotgun:{pos:[.25,-.3,-.58],rot:[.05,.42,0]},blaster:{pos:[.26,-.28,-.56],rot:[.05,.42,0]},bite:{pos:[.27,-.27,-.48],rot:[.15,.4,-.1]},dagger:{pos:[.24,-.28,-.5],rot:[.1,.45,-.15]}};for(let e of Object.values(eu))Vl.add(e),e.visible=!1;let nu=null;function ru(e){if(e!==nu){nu=e;for(let[t,n]of Object.entries(eu))if(n.visible=t===e,t===e){let e=tu[t];n.position.set(...e.pos),n.rotation.set(...e.rot)}}}function iu(e,t){nu&&(Hl.aspect=t,Hl.updateProjectionMatrix(),e.clearDepth(),e.render(Vl,Hl))}let au=new oc({antialias:!0});au.setSize(window.innerWidth,window.innerHeight),au.setPixelRatio(Math.min(window.devicePixelRatio,2)),au.shadowMap.enabled=!0,au.shadowMap.type=2,au.toneMapping=4,au.toneMappingExposure=1.05,au.outputColorSpace=O,document.body.appendChild(au.domElement);let ou=new Ct;ou.background=new W(8308963),ou.fog=new xt(8308963,.0065),ou.add(new bi(12114175,7244858,.8));let su=new zi(16774624,2);su.position.set(30,55,25),su.castShadow=!0,su.shadow.mapSize.set(2048,2048),su.shadow.camera.near=.5,su.shadow.camera.far=140,su.shadow.camera.left=-55,su.shadow.camera.right=55,su.shadow.camera.top=55,su.shadow.camera.bottom=-55,su.shadow.bias=-4e-4,ou.add(su);let Q=new Sc(ou);Q.position.set(0,2,8);let cu=new Oc,lu=new Dc,uu=new sc(au.domElement),du=new $c,fu=new Map;function pu(){let e=document.createElement(`canvas`);e.width=128,e.height=32;let t=e.getContext(`2d`),n=new Ir(e),r=new Ln(new Cn({map:n,transparent:!0,depthTest:!1}));return r.scale.set(1.8,.45,1),ou.add(r),{sprite:r,canvas:e,ctx:t,tex:n,lastHp:-1,lastLives:-1}}function mu(e,t,n){let{ctx:r,canvas:i,tex:a}=e,o=i.width,s=i.height;r.clearRect(0,0,o,s),r.fillStyle=`#222`,r.beginPath(),r.roundRect(0,0,o,16,3),r.fill();let c=Math.max(0,t/100);r.fillStyle=c>.5?`#44ff44`:c>.25?`#ffcc00`:`#ff3300`,r.beginPath(),r.roundRect(0,0,Math.max(2,o*c),16,3),r.fill(),r.fillStyle=`#fff`,r.font=`bold 10px monospace`,r.textAlign=`center`,r.fillText(`${t}`,o/2,11);let l=(o-45)/2;for(let e=0;e<3;e++)r.fillStyle=e<n?`#ff3355`:`#444`,r.font=`13px monospace`,r.textAlign=`left`,r.fillText(`♥`,l,30),l+=15;a.needsUpdate=!0,e.lastHp=t,e.lastLives=n}function hu(e){gu();for(let t of e){let e=pu();mu(e,t.hp,t.lives),fu.set(t,e)}}function gu(){for(let e of fu.values())ou.remove(e.sprite);fu.clear()}let _u=new Map;function vu(){let e=document.createElement(`canvas`);e.width=128,e.height=18;let t=e.getContext(`2d`),n=new Ir(e),r=new Ln(new Cn({map:n,transparent:!0,depthTest:!1}));return r.scale.set(1.8,.25,1),ou.add(r),{sprite:r,canvas:e,ctx:t,tex:n,lastHp:-1,lastIsIt:!1}}function yu(e,t){let{ctx:n,canvas:r,tex:i}=e,a=r.width,o=r.height;n.clearRect(0,0,a,o);let s=t.isIt?Ld[zd.get(t)??`regular`].hp:100,c=Math.max(0,t.hp/s);n.fillStyle=`#222`,n.beginPath(),n.roundRect(0,0,a,o,3),n.fill(),n.fillStyle=t.isIt?c>.5?`#44ff44`:c>.25?`#ffcc00`:`#ff3300`:c>.5?`#44aaff`:c>.25?`#ffcc00`:`#ff3300`,n.beginPath(),n.roundRect(0,0,Math.max(2,a*c),o,3),n.fill(),n.fillStyle=`#fff`,n.font=`bold 10px monospace`,n.textAlign=`center`,n.fillText(`${Math.max(0,t.hp)}`,a/2,o-4),i.needsUpdate=!0,e.lastHp=t.hp,e.lastIsIt=t.isIt}function bu(e){xu(),gu();for(let t of e){let e=vu();yu(e,t),_u.set(t,e)}}function xu(){for(let e of _u.values())ou.remove(e.sprite);_u.clear()}let Su=new Pl,Cu=new Map,wu=new Set,Tu=new Map,Eu=new Set,Du=new Map,Ou=document.getElementById(`room-code`);if(Ou){let e=`${window.location.origin}${window.location.pathname}?room=${Su.roomCode}`;Ou.textContent=`🔗 ${e}`,Ou.addEventListener(`click`,()=>{navigator.clipboard.writeText(e).catch(()=>{}),Ou.textContent=`✓ Copied!`,setTimeout(()=>{Ou.textContent=`🔗 ${e}`},1500)})}let ku=0;function Au(){let e=Su.peerId,t=ku;for(let[n,r]of Du)(r<t||r===t&&n<e)&&(t=r,e=n);return e}function ju(){if(Q.isIt)return Su.peerId;for(let[e,t]of Cu)if(t.isIt)return e;return null}function Mu(e){let t=Q;t.setIt(e===Su.peerId),t.isIt?t.tagImmunity=0:t.tagImmunity=2;for(let[t,n]of Cu)n.setIt(t===e),n.tagImmunity=n.isIt?0:2;for(let e of $.bots)e.setIt(!1)}function Nu(e){if(Au()!==Su.peerId||$.isTransitioning||$.mode.name===`Tomfoolery`)return;let t=[Su.peerId,...Cu.keys()].filter(t=>t!==e);if(t.length===0)return;let n=Ed&&t.includes(Ed)?Ed:t[0];Ed=e,Mu(n),Su.sendSetIt(n,$.roundId)}function Pu(e){if(e.type===`state`){let t=!Cu.has(e.peerId);wu.add(e.peerId),Tu.set(e.peerId,e.username),Du.set(e.peerId,e.joinedAt),e.hauntedClass&&Nd.set(e.peerId,e.hauntedClass),e.isAdmin?Eu.add(e.peerId):Eu.delete(e.peerId);let n=Cu.get(e.peerId);if(n||(n=new Rl(ou,e.peerId,e.username),Cu.set(e.peerId,n)),n.applyState(e),!$.isTransitioning&&e.roundId===$.roundId&&e.peerId===Au()&&$.syncTimer(e.timeLeft),t&&($.isTransitioning||Su.sendRoundSync($.mapIdx,$.modeIdx,$.roundId,Math.max(0,$.timer)),Au()===Su.peerId&&$.mode.name!==`Tomfoolery`)){let e=ju();e&&Su.sendSetIt(e,$.roundId)}return}if(e.type===`setit`){Td={peerId:e.itPeerId,roundId:e.roundId},e.roundId===$.roundId&&Mu(e.itPeerId);return}if(e.type===`tag`){Ed=e.taggerId;let t=Cu.get(e.taggerId),n=Cu.get(e.taggedId);t?.setIt(!1),t&&(t.tagImmunity=2),n?.setIt(!0),e.taggerId===Su.peerId&&(Q.setIt(!1),Q.tagImmunity=2),e.taggedId===Su.peerId&&Q.setIt(!0);return}if(e.type===`roundsync`){$.roundId!==e.roundId||$.mapIdx!==e.mapIdx||$.modeIdx!==e.modeIdx?($.jumpToRound(e.mapIdx,e.modeIdx,e.roundId,e.timeLeft),wd=-1):$.syncTimer(e.timeLeft);return}if(e.type===`leave`){let t=Cu.get(e.peerId),n=t?.isIt??!1;wu.delete(e.peerId),Tu.delete(e.peerId),Eu.delete(e.peerId),Du.delete(e.peerId),t&&(t.removeFromScene(ou),Cu.delete(e.peerId)),n&&Nu(e.peerId)}}Su.connect(Pu),window.addEventListener(`beforeunload`,()=>Su.sendLeave());let Fu=document.getElementById(`round-timer`),Iu=document.getElementById(`mode-name`),Lu=document.getElementById(`mode-status`),Ru=document.getElementById(`coords`),zu=document.getElementById(`transition-overlay`),Bu=document.getElementById(`weapon-hud`),Vu=document.getElementById(`crosshair`),Hu=document.getElementById(`sprint-bar-wrap`),Uu=document.getElementById(`sprint-bar`),Wu=document.getElementById(`zombie-picker`),Gu=document.getElementById(`zombie-picker-timer`),Ku=document.getElementById(`zombie-picker-buttons`),qu=document.getElementById(`haunted-picker`),Ju=document.getElementById(`haunted-picker-timer`),Yu=document.getElementById(`haunted-picker-buttons`),Xu=document.getElementById(`minimap`),Zu=Xu.getContext(`2d`);Xu.width=150,Xu.height=150;function Qu(){Ku.innerHTML=Rd.map(e=>{let t=Ld[e];return`<button data-zclass="${e}" style="
      padding:12px 16px; font-family:monospace; font-size:0.82rem; cursor:pointer;
      background:rgba(0,0,0,0.75); color:${t.color};
      border:2px solid ${t.color}44; border-radius:8px; min-width:130px; text-align:center;
      transition:border-color 0.1s, background 0.1s;
    ">
      <div style="font-weight:bold;font-size:1rem;letter-spacing:1px;">${t.label.toUpperCase()}</div>
      <div style="font-size:0.7rem;color:#aaa;margin-top:4px;">${t.hp} HP &nbsp;×${t.speedMult}</div>
      <div style="font-size:0.68rem;color:#888;margin-top:3px;">${t.desc}</div>
    </button>`}).join(``),Ku.querySelectorAll(`button[data-zclass]`).forEach(e=>{e.addEventListener(`click`,()=>{Hd=e.dataset.zclass,rd()})})}function $u(e){let t=Q;if(e===t)return Md.get(t)??`ghost`;for(let[t,n]of Cu)if(e===n)return Nd.get(t)??`ghost`;return`ghost`}function ed(e){Md.set(Q,e),qu.style.display=`none`}function td(){Yu.innerHTML=jd.map(e=>{let t=Ad[e];return`<button data-hclass="${e}" style="
      padding:14px 20px;font-family:monospace;font-size:0.85rem;cursor:pointer;
      background:rgba(0,0,0,0.75);color:${t.color};
      border:2px solid ${t.color}44;border-radius:8px;min-width:160px;text-align:center;
      transition:border-color 0.1s,background 0.1s;
    ">
      <div style="font-weight:bold;font-size:1.1rem;letter-spacing:2px;">${t.label.toUpperCase()}</div>
      <div style="font-size:0.7rem;color:#aaa;margin-top:6px;">${t.desc}</div>
    </button>`}).join(``),Yu.querySelectorAll(`button[data-hclass]`).forEach(e=>{e.addEventListener(`click`,()=>{Pd=e.dataset.hclass,nd(),ed(Pd)})})}function nd(){Yu.querySelectorAll(`button[data-hclass]`).forEach(e=>{let t=e.dataset.hclass,n=Ad[t],r=t===Pd;e.style.borderColor=r?n.color:n.color+`44`,e.style.background=r?n.color+`22`:`rgba(0,0,0,0.75)`})}function rd(){let e=Hd??`regular`;Ku.querySelectorAll(`button[data-zclass]`).forEach(t=>{let n=t.dataset.zclass,r=Ld[n],i=n===e;t.style.borderColor=i?r.color:r.color+`44`,t.style.background=i?r.color+`22`:`rgba(0,0,0,0.75)`})}function id(e){let t=e.canvas.getContext(`2d`),n=e.canvas.width;t.clearRect(0,0,n,n),t.beginPath(),t.arc(n/2,n/2,n/2-4,0,Math.PI*2),t.fillStyle=`rgba(0,0,0,0.65)`,t.fill();let r=e.cooldown/5;t.beginPath(),t.moveTo(n/2,n/2),t.arc(n/2,n/2,n/2-4,-Math.PI/2,-Math.PI/2+r*Math.PI*2),t.closePath(),t.fillStyle=`rgba(255, 80, 80, 0.5)`,t.fill(),t.fillStyle=`#ffffff`,t.font=`bold ${n*.45}px Arial`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(Math.ceil(e.cooldown).toString(),n/2,n/2),e.texture.needsUpdate=!0}let $=new Ml(ou,Q,Fu,Iu,Lu,zu),ad=document.getElementById(`login-overlay`),od=document.getElementById(`nickname-input`),sd=document.getElementById(`nickname-submit`),cd=document.getElementById(`login-error`),ld=document.getElementById(`admin-btn`),ud=document.getElementById(`admin-panel`),dd=!1,fd=!1,pd=``,md=0,hd=-1,gd=new Map,_d=new Map,vd=new Map,yd=new Map,bd=new Map,xd=new Map,Sd=new Set,Cd=new Map,wd=-1,Td=null,Ed=null,Dd=new Map,Od=null,kd=null,Ad={ghost:{label:`Ghost`,color:`#cc44ff`,desc:`Invisible · First-person · Backstab with Dagger`,speedMult:1,fogDensity:.055},maskkiller:{label:`Mask Killer`,color:`#ff8800`,desc:`Visible · 1.5× speed · Direct Sword melee`,speedMult:1.5,fogDensity:.12}},jd=[`ghost`,`maskkiller`],Md=new Map,Nd=new Map,Pd=null,Fd=!1,Id=8,Ld={regular:{hp:200,speedMult:1,pounceSpeed:32,pounceCooldown:4,instantInfect:!1,hasVomit:!1,label:`Regular`,color:`#ff4400`,desc:`Balanced · 3 bites to infect`},hefty:{hp:500,speedMult:.62,pounceSpeed:18,pounceCooldown:6,instantInfect:!0,hasVomit:!1,label:`Hefty`,color:`#cc2200`,desc:`500 HP · Very slow · ONE BITE infects`},speedy:{hp:100,speedMult:1.45,pounceSpeed:52,pounceCooldown:2,instantInfect:!1,hasVomit:!1,label:`Speedy`,color:`#ff8800`,desc:`100 HP · Very fast · Far pounce`},trapper:{hp:180,speedMult:1,pounceSpeed:0,pounceCooldown:999,instantInfect:!1,hasVomit:!0,label:`Trapper`,color:`#44cc22`,desc:`RMB vomits acid puddles that slow survivors`}},Rd=[`regular`,`hefty`,`speedy`,`trapper`],zd=new Map,Bd=new Map,Vd=[],Hd=null,Ud=!1,Wd=`width:100%;padding:6px 8px;cursor:pointer;font-family:monospace;font-size:0.8rem;border-radius:4px;margin-bottom:4px;text-align:left;`;Wd+``,Wd+``;let Gd=Wd+`background:#0a0a1a;color:#66aaff;border:1px solid #334466;`;Wd+``;let Kd=Wd+`background:#2a2a00;color:#ffee66;border:2px solid #ffcc00;font-weight:bold;`;function qd(){let e=$.mapNames,t=$.modeNames,n=e.map((e,t)=>`<option value="${t}" ${t===$.nextMapIdx?`selected`:``}>${e}</option>`).join(``),r=t.map((e,t)=>`<option value="${t}" ${t===$.nextModeIdx?`selected`:``}>${e}</option>`).join(``),i=`width:100%;padding:5px 6px;font-family:monospace;font-size:0.8rem;background:#111;color:#ccc;border:1px solid #444;border-radius:4px;margin-bottom:8px;`,a=$.bots.map((e,t)=>{let n=e.isFrozen;return`<button id="adm-freeze-bot-${t}" style="${n?Kd:`width:100%;padding:6px 8px;cursor:pointer;font-family:monospace;font-size:0.8rem;border-radius:4px;margin-bottom:4px;text-align:left;background:#0a1a1a;color:#88ddff;border:1px solid #336666;`}">❄ ${e.name} — ${n?`Unfreeze`:`Freeze`}</button>`}).join(``),o=fd?Kd:`width:100%;padding:6px 8px;cursor:pointer;font-family:monospace;font-size:0.8rem;border-radius:4px;margin-bottom:4px;text-align:left;background:#1a1a00;color:#ffcc44;border:1px solid #554400;`,s=[`You`,...$.bots.map(e=>e.name)].map((e,t)=>`<option value="${t===0?`player`:String(t-1)}">${e}</option>`).join(``),c=Wc.map(e=>`<option value="${e}">${Uc[e].name}</option>`).join(``);ud.innerHTML=`
    <div style="font-size:0.7rem;color:#ffcc00;letter-spacing:2px;margin-bottom:10px;border-bottom:1px solid #333;padding-bottom:6px;">⚙ ADMIN PANEL</div>

    <div style="font-size:0.7rem;color:#888;margin-bottom:4px;">ROUND</div>
    <button id="adm-force-end" style="width:100%;padding:6px 8px;cursor:pointer;font-family:monospace;font-size:0.8rem;border-radius:4px;margin-bottom:4px;text-align:left;background:#1a0a0a;color:#ff6666;border:1px solid #553333;">⏩ Force End Round</button>

    <div style="font-size:0.7rem;color:#888;margin:8px 0 4px;">NEXT MAP</div>
    <select id="adm-map-sel" style="${i}">${n}</select>

    <div style="font-size:0.7rem;color:#888;margin-bottom:4px;">NEXT MODE</div>
    <select id="adm-mode-sel" style="${i}">${r}</select>

    <div style="font-size:0.7rem;color:#888;margin:8px 0 4px;">SELF</div>
    <button id="adm-speed" style="${o}">⚡ Speed Boost — ${fd?`ON`:`OFF`}</button>

    <div style="font-size:0.7rem;color:#888;margin:8px 0 4px;">FREEZE PLAYERS</div>
    <button id="adm-freeze-player" style="${Q.isFrozen?Kd:Gd}">❄ You — ${Q.isFrozen?`Unfreeze`:`Freeze`}</button>
    ${a}

    <div style="font-size:0.7rem;color:#888;margin:8px 0 4px;">GIVE WEAPON</div>
    <select id="adm-give-target" style="${i}">${s}</select>
    <select id="adm-give-weapon" style="${i}">${c}</select>
    <button id="adm-give-fire" ${hd===$.roundId?`disabled`:``} style="${hd===$.roundId?Kd:Gd}">${hd===$.roundId?`✓ Used this round`:`▶ Fire / Give`}</button>
  `,document.getElementById(`adm-force-end`)?.addEventListener(`click`,()=>{$.forceEndRound(),ud.style.display=`none`,ld.style.background=`#2a2a00`}),document.getElementById(`adm-map-sel`)?.addEventListener(`change`,e=>{$.setNextMap(Number(e.target.value))}),document.getElementById(`adm-mode-sel`)?.addEventListener(`change`,e=>{$.setNextMode(Number(e.target.value))}),document.getElementById(`adm-speed`)?.addEventListener(`click`,()=>{fd=!fd,qd()}),document.getElementById(`adm-freeze-player`)?.addEventListener(`click`,()=>{let e=Q;e.setFrozen(!e.isFrozen),qd()}),$.bots.forEach((e,t)=>{document.getElementById(`adm-freeze-bot-${t}`)?.addEventListener(`click`,()=>{let t=e;t.setFrozen(!t.isFrozen),qd()})}),document.getElementById(`adm-give-fire`)?.addEventListener(`click`,()=>{if(hd===$.roundId)return;let e=document.getElementById(`adm-give-target`).value,t=document.getElementById(`adm-give-weapon`).value;if(e===`player`)du.setWeapon(t);else{let n=Number(e);gd.set(n,t),_d.set(n,0)}hd=$.roundId,qd()})}ld.addEventListener(`click`,()=>{let e=ud.style.display===`none`;ud.style.display=e?`block`:`none`,ld.style.background=e?`#2a2a00`:`#111`,e&&qd()});function Jd(e){ku=Date.now(),pd=e,ad.style.display=`none`,Xu.style.display=`block`,dd=!0,Q.setName(e),$.isAdmin=!1,ld.style.display=`none`,$.startRound()}sd.addEventListener(`click`,()=>{let e=od.value.trim();if(e.length<2){cd.textContent=`Nickname must be at least 2 characters.`;return}if([...Tu.values()].some(t=>t.toLowerCase()===e.toLowerCase())){cd.textContent=`That nickname is already taken. Choose another.`;return}Jd(e)}),od.addEventListener(`keydown`,e=>{e.key===`Enter`&&sd.click()}),od.focus(),window.addEventListener(`resize`,()=>{au.setSize(window.innerWidth,window.innerHeight),cu.onResize(),lu.onResize()});function Yd(e,t,n){let r=e.distanceTo(t.position),i=n>0?r/n:0,a=t.position.x+t.velocity.x*i*.72,o=t.position.z+t.velocity.z*i*.72;return new R(a-e.x,t.position.y+.9-e.y,o-e.z).normalize()}function Xd(e,t){if(t<=0)return e.clone().normalize();let n=new R(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();return e.clone().applyAxisAngle(n,(Math.random()*2-1)*t).normalize()}function Zd(){return Math.random()<.4?Math.random()*.3+.12:Math.random()*.05}function Qd(e){e.isIt||e.isEliminated||(el.delete(e),e.setIt(!0),e.setEliminated(!0),Cd.set(e,3))}function $d(e,t,n,r,i){i?Qd(n):Vc.onBiteHit(n,e),n.velocity.x+=r.x*7,n.velocity.z+=r.z*7,n.velocity.y=Math.max(n.velocity.y,4),n.knockbackTimer=.3}function ef(e,t,n,r){let i=Xu.width,a=Xu.height,o=Zu,s=i*.88/(e*2),c=i/2,l=a/2,u=e=>c+e*s,d=e=>l+e*s;o.clearRect(0,0,i,a),o.fillStyle=`rgba(0,0,0,0.72)`,o.fillRect(0,0,i,a),o.fillStyle=`rgba(255,255,255,0.45)`,o.font=`bold 9px monospace`,o.textAlign=`center`,o.fillText(`MAP`,i/2,11);let f=e*s;o.strokeStyle=`rgba(255,255,255,0.18)`,o.lineWidth=1,o.strokeRect(c-f,l-f,f*2,f*2),o.strokeStyle=`rgba(255,255,255,0.06)`,o.lineWidth=.5,o.beginPath(),o.moveTo(c,l-f),o.lineTo(c,l+f),o.moveTo(c-f,l),o.lineTo(c+f,l),o.stroke();let p=(t,n,r)=>{let i=t.max.x-t.min.x,a=t.max.z-t.min.z;if(i>e*1.5||a>e*1.5)return;let c=u(t.min.x),l=d(t.min.z),f=i*s,p=a*s;o.fillStyle=n,o.strokeStyle=r,o.lineWidth=.5,o.fillRect(c,l,f,p),o.strokeRect(c,l,f,p)};for(let e of t)p(e,`rgba(160,130,85,0.45)`,`rgba(200,165,100,0.55)`);for(let e of n)p(e,`rgba(115,100,80,0.55)`,`rgba(145,125,100,0.65)`);let m=r===`Tomfoolery`,h=r===`Haunted`;if(m||h){for(let e of $.bots){if(e.isEliminated||h&&e.isIt)continue;let t=u(e.position.x),n=d(e.position.z);o.fillStyle=e.isIt?`#ff3300`:`#999999`,o.strokeStyle=e.isIt?`#ff8800`:`transparent`,o.lineWidth=1,o.beginPath(),o.arc(t,n,e.isIt?4:3,0,Math.PI*2),o.fill(),e.isIt&&o.stroke()}for(let e of Cu.values()){if(e.isEliminated||h&&e.isIt)continue;let t=u(e.position.x),n=d(e.position.z);o.fillStyle=e.isIt?`#ff3300`:`#ff8800`,o.strokeStyle=e.isIt?`#ff8800`:`transparent`,o.lineWidth=1,o.beginPath(),o.arc(t,n,e.isIt?4.5:3.5,0,Math.PI*2),o.fill(),e.isIt&&o.stroke()}}if(!Q.isEliminated){let e=u(Q.position.x),t=d(Q.position.z);o.save(),o.translate(e,t),o.rotate(-Q.yaw),o.fillStyle=Q.isIt?`#ff4400`:`#ffffff`,o.strokeStyle=Q.isIt?`#ffaa00`:`#aaccff`,o.lineWidth=.8,o.beginPath(),o.moveTo(0,-7),o.lineTo(-4,4.5),o.lineTo(4,4.5),o.closePath(),o.fill(),o.stroke(),o.restore()}}let tf=performance.now();function nf(){requestAnimationFrame(nf);let e=performance.now(),t=Math.min((e-tf)/1e3,.05);if(tf=e,uu.flush(),!dd){au.render(ou,cu.camera);return}let n=$.map,r=n?n.colliders:[],i=n?n.walls:[],a=n?n.boundary:22;for(let e of n?.movingPlatforms??[])e.preUpdate(t);let o=$.mode.name===`Haunted`,s=Q,c=Md.get(s)??`ghost`,l=o&&s.isIt,u=l&&c===`ghost`,d=l&&c===`maskkiller`;Q.blockJump=o&&!d,Q.update(t,uu,r,i,a,n?.groundY??0,n?.voidBoundary);for(let[e,n]of Cu)if(n.isStale){let t=n.isIt;n.removeFromScene(ou),Cu.delete(e),Du.delete(e),wu.delete(e),t&&Nu(e)}else n.update(t);let f=[Q,...$.bots],p=[...f,...[...Cu.values()]];for(let e of $.bots)e.update(t,r,i,n?n.teleporters:[],f,n?.groundY??0,n?.voidBoundary);let m=$.mode.name===`Hunter`&&Q.isIt;for(let[e,n]of gd){let r=$.bots[e];if(!r||r.isEliminated){gd.delete(e);continue}let i=(_d.get(e)??0)-t;if(i>0){_d.set(e,i);continue}let a=null,o=1/0;for(let e of p){if(e===r||e.isEliminated)continue;let t=r.position.distanceTo(e.position);t<o&&(o=t,a=e)}if(a){let e=r.position.clone().add(new R(0,1.4,0)),t=Xd(Yd(e,a,Uc[n].speed),Zd());e.addScaledVector(t,.6),du.fireAs(ou,e,t,r,n)}_d.set(e,Uc[n].cooldown)}if($.mode.name===`Infection`)for(let e=0;e<$.bots.length;e++){let n=$.bots[e];if(n.isEliminated)continue;let r=n,i=(vd.get(e)??0)-t;if(vd.set(e,i),i>0)continue;let a=n.position.clone().add(new R(0,1.4,0));if(r.isIt){let i=null,a=1/0;for(let e of p){if(e===r||e.isEliminated||e.isIt)continue;let t=n.position.distanceTo(e.position);t<a&&(a=t,i=e)}let o=zd.get(r)??`regular`,s=Ld[o];if(i){let c=new R(i.position.x-n.position.x,0,i.position.z-n.position.z).normalize();if(s.hasVomit){let e=(Bd.get(r)??0)-t;Bd.set(r,Math.max(0,e)),a<7&&e<=0&&(Vd.push(new Bl(ou,n.position.x,n.position.y,n.position.z)),Bd.set(r,5))}else{let n=(xd.get(e)??0)-t;xd.set(e,Math.max(0,n)),a>5&&a<14&&n<=0&&(r.velocity.x=c.x*s.pounceSpeed,r.velocity.z=c.z*s.pounceSpeed,r.velocity.y=Math.max(r.velocity.y,7),r.knockbackTimer=.32,xd.set(e,s.pounceCooldown),a<5&&($d(r,o,i,c,s.instantInfect),vd.set(e,Uc.bite.cooldown)))}a<3.2&&($d(r,o,i,c,s.instantInfect),vd.set(e,Uc.bite.cooldown))}}else{let t=null,i=1/0;for(let e of p){if(e===r||e.isEliminated||!e.isIt)continue;let a=n.position.distanceTo(e.position);a<i&&(i=a,t=e)}if(t){if(i<3.5){let r=new R(t.position.x-n.position.x,0,t.position.z-n.position.z).normalize(),i=Vc.onSwordHit(t);i>0&&(t.hp=Math.max(0,t.hp-i)),t.velocity.x+=r.x*38,t.velocity.z+=r.z*38,t.velocity.y=Math.max(t.velocity.y,12),t.knockbackTimer=.7,vd.set(e,Uc.sword.cooldown)}else if(i<14){let n=Xd(Yd(a,t,Uc.blaster.speed),Zd());du.fireAs(ou,a.clone().addScaledVector(n,.6),n,r,`blaster`),vd.set(e,Uc.blaster.cooldown)}}}}if($.mode.name===`Tomfoolery`)for(let e=0;e<$.bots.length;e++){let n=$.bots[e];if(n.isEliminated)continue;let r=yd.get(e)??0;if(r>0){yd.set(e,r-t);continue}let i=null,a=1/0;for(let e of p){if(e===n||e.isEliminated)continue;let t=n.position.distanceTo(e.position);t<a&&(a=t,i=e)}if(!i)continue;let o=$.bots[e].weapon;if(!o)continue;let s=n.position.clone().add(new R(0,1.1,0));if(a<3.5){let t=i.position.clone().sub(n.position).setY(0).normalize();i.velocity.x+=t.x*22,i.velocity.z+=t.z*22,i.velocity.y=Math.max(i.velocity.y,10),i.knockbackTimer=.5,yd.set(e,Uc.sword.cooldown)}else if(a<22){let t=Xd(Yd(s,i,Uc.rocket.speed),Zd()*.8);o.fireAs(ou,s.clone().addScaledVector(t,.6),t,n,`rocket`),yd.set(e,Uc.rocket.cooldown+.4)}}if($.mode.name===`Haunted`)for(let e=0;e<$.bots.length;e++){let n=$.bots[e];if(!n.isIt||n.isEliminated)continue;let r=bd.get(e)??0;if(r>0){bd.set(e,r-t);continue}let i=$u(n),a=null,o=1/0;for(let e of p){if(e===n||e.isIt||e.isEliminated)continue;let t=n.position.distanceTo(e.position);t<o&&(o=t,a=e)}if(!a)continue;let s=$.bots[e].weapon;if(!s)continue;let c=n.position.clone().add(new R(0,1.1,0));if(i===`ghost`){if(o<2.5){let t=n.position.clone().sub(a.position).setY(0).normalize(),r=new R(-Math.sin(a.position.y),0,-Math.cos(a.position.y));if(t.dot(r)>-.3){let t=a.position.clone().sub(c).normalize();s.fireAs(ou,c.clone().addScaledVector(t,.5),t,n,`dagger`),bd.set(e,Uc.dagger.cooldown+.2)}}}else if(o<3.2){let t=a.position.clone().sub(c).normalize();s.fireAs(ou,c.clone().addScaledVector(t,.5),t,n,`sword`),bd.set(e,Uc.sword.cooldown+.15)}}if($.mode.name===`Hunter`){let e=n?.teleporters??[];for(let[e,n]of Dd){let r=n-t;r<=0?(Dd.delete(e),e.setFrozen(!1)):Dd.set(e,r)}for(let t of p)if(!(t.isIt||t.isEliminated||Dd.has(t)))for(let n of e)(n.sabotageProgress??0)<=0||n.cooldown>0||n.trigger.containsPoint(t.position)&&(t.setFrozen(!0),Dd.set(t,5),n.cooldown=1,n.link&&(n.link.cooldown=1));if(Q.isIt&&!Q.isEliminated){let n=null,r=1/0;for(let t of e){if(t.sabotaged)continue;let e=(t.trigger.min.x+t.trigger.max.x)/2,i=(t.trigger.min.z+t.trigger.max.z)/2,a=Math.hypot(Q.position.x-e,Q.position.z-i);a<2.2&&a<r&&(r=a,n=t)}if(n&&uu.isDown(`KeyE`))n.sabotageProgress=Math.min(2,(n.sabotageProgress??0)+t);else{for(let t of e)!t.sabotaged&&(t.sabotageProgress??0)>0&&t!==n&&(t.sabotageProgress=0);!uu.isDown(`KeyE`)&&n&&(n.sabotageProgress=0)}}}for(let e of n?.movingPlatforms??[])for(let t of p)!t.isEliminated&&e.isOnTop(t.position)&&t.position.add(e.delta);for(let e of n?.fallingPlatforms??[])e.preUpdate(t,p);let h=o&&!d;h?(lu.update(Q.position,Q.yaw,uu),Q.mesh.visible=!1):(cu.update(Q.position,Q.yaw,uu),Q.mesh.visible=!Q.isEliminated);let g=h?lu.camera:cu.camera,_=$.mode.name===`Tomfoolery`,v=$.mode.name===`Infection`,y=v&&Q.isIt,b=v&&!Q.isIt,x=_||b||y||hd===$.roundId||m||l;if(y&&du.setWeapon(`bite`),u&&du.setWeapon(`dagger`),d&&du.setWeapon(`sword`),y&&!Q.isEliminated){let e=Q,n=Ld[zd.get(e)??`regular`];if(uu.mouseRightPressed)if(n.hasVomit)(Bd.get(e)??0)<=0&&(Vd.push(new Bl(ou,Q.position.x,Q.position.y,Q.position.z)),Bd.set(e,5));else{let e=new R;g.getWorldDirection(e),Q.pounce(e,n.pounceSpeed,.32,n.pounceCooldown),Sd.clear()}Bd.has(e)&&Bd.set(e,Math.max(0,(Bd.get(e)??0)-t));for(let e=Vd.length-1;e>=0;e--)Vd[e].update(t)||(Vd[e].dispose(),Vd.splice(e,1));if(Q.isPouncing){for(let t of p)if(!(t.isIt||t.isEliminated||Sd.has(t))&&Q.position.distanceTo(t.position)<2.2){Sd.add(t),n.instantInfect?Qd(t):Vc.onBiteHit(t,e);let r=new R(t.position.x-Q.position.x,0,t.position.z-Q.position.z).normalize();t.velocity.x+=r.x*10,t.velocity.z+=r.z*10,t.velocity.y=Math.max(t.velocity.y,6),t.knockbackTimer=.45}}else Sd.clear()}let S={rocket:`#ff2200`,freeze:`#44aaff`,shotgun:`#ffee33`,sword:`#aaddff`,blaster:`#00ff44`,bite:`#ff3300`,dagger:`#cc44ff`};x&&uu.pointerLocked&&!Q.isEliminated?(Vu.style.display=`block`,Vu.style.color=S[du.type]??`rgba(255,255,255,0.9)`):Vu.style.display=`none`;{let e=Q.stamina/Q.maxStamina,t=Math.round(e*100),n=e>=1;Hu.style.opacity=Q.isSprinting||Q.isExhausted||!n?`1`:`0`,Uu.style.width=`${t}%`,Uu.style.background=Q.isExhausted?`#ff2222`:e>.5?`#44ff88`:e>.2?`#ffcc44`:`#ff4444`}if(x){if(!y&&!u)if(b)uu.isDown(`Digit1`)&&du.setWeapon(Wc[0]),uu.isDown(`Digit5`)&&du.setWeapon(Wc[4]);else{let e=[`Digit1`,`Digit2`,`Digit3`,`Digit4`,`Digit5`];for(let t=0;t<e.length;t++)uu.isDown(e[t])&&du.setWeapon(Wc[t])}if(uu.mouseLeftPressed&&!Q.isEliminated){let e=new R;g.getWorldDirection(e);let t=Q.position.clone().add(new R(0,1.4,0)).addScaledVector(e,.6);du.fire(ou,t,e,Q)}if(u)Bu.innerHTML=`<div style="
        padding:6px 14px;font-family:monospace;font-size:13px;border-radius:6px;
        background:#cc44ff22;border:2px solid #cc44ff;color:#cc44ff;font-weight:bold;text-align:center;
      ">[LMB] Dagger — stab from BEHIND</div>`;else if(d)Bu.innerHTML=`<div style="
        padding:6px 14px;font-family:monospace;font-size:13px;border-radius:6px;
        background:#ff880022;border:2px solid #ff8800;color:#ff8800;font-weight:bold;text-align:center;
      ">[LMB] Slash — direct melee</div>`;else if(y){let e=Q,t=Ld[zd.get(e)??`regular`],n;if(t.hasVomit){let t=Bd.get(e)??0,r=t<=0,i=r?100:Math.round((1-t/5)*100);n=`<div style="
          padding:6px 14px;font-family:monospace;font-size:13px;border-radius:6px;
          background:${r?`#44cc2233`:`rgba(0,0,0,0.45)`};
          border:2px solid ${r?`#44cc22`:`rgba(255,255,255,0.2)`};
          color:${r?`#44cc22`:`rgba(255,255,255,0.4)`};
          font-weight:${r?`bold`:`normal`};text-align:center;
        ">${r?`[RMB] Vomit`:`[RMB] Vomit (${t.toFixed(1)}s)`}${r?``:`<div style="font-size:10px;margin-top:3px;color:#88ff44;">${`█`.repeat(Math.round(i/10))}${`░`.repeat(10-Math.round(i/10))} ${i}%</div>`}</div>`}else{let e=Q.pounceCooldown,r=t.pounceCooldown,i=Math.round((1-e/r)*100),a=e<=0;n=`<div style="
          padding:6px 14px;font-family:monospace;font-size:13px;border-radius:6px;
          background:${a?`#ff660033`:`rgba(0,0,0,0.45)`};
          border:2px solid ${a?`#ff6600`:`rgba(255,255,255,0.2)`};
          color:${a?`#ff6600`:`rgba(255,255,255,0.4)`};
          font-weight:${a?`bold`:`normal`};text-align:center;
        ">${a?`[RMB] Pounce`:`[RMB] Pounce (${e.toFixed(1)}s)`}${a?``:`<div style="font-size:10px;margin-top:3px;color:#ffcc44;">${`█`.repeat(Math.round(i/10))}${`░`.repeat(10-Math.round(i/10))} ${i}%</div>`}</div>`}Bu.innerHTML=`
        <div style="
          padding:6px 14px;font-family:monospace;font-size:13px;border-radius:6px;
          background:${t.color}22;border:2px solid ${t.color};
          color:${t.color};font-weight:bold;text-align:center;
        ">[LMB] Bite &nbsp;<span style="opacity:0.7;font-size:11px;">[${t.label}]</span></div>
        ${n}`}else b?Bu.innerHTML=[[Wc[0],1],[Wc[4],5]].map(([e,t])=>{let n=e===du.type,r=S[e]??`#ffffff`,i=Uc[e],a=i.name.split(` `)[0],o=``;if(n&&i.maxAmmo!==-1){let e=du.ammo;if(du.isReloading){let e=Math.round(du.reloadProgress*100),t=Math.round(du.reloadProgress*10);o=`<div style="font-size:10px;margin-top:3px;color:#ffcc44;">${`█`.repeat(t)+`░`.repeat(10-t)} ${e}%</div>`}else{let t=`●`.repeat(e)+`○`.repeat(i.maxAmmo-e);o=`<div style="font-size:10px;margin-top:3px;letter-spacing:1px;color:${e===0?`#ff4444`:r};">${t}</div>`}}return`<div style="
          padding:6px 14px;font-family:monospace;font-size:13px;border-radius:6px;
          background:${n?r+`33`:`rgba(0,0,0,0.45)`};
          border:2px solid ${n?r:`rgba(255,255,255,0.2)`};
          color:${n?r:`rgba(255,255,255,0.5)`};
          font-weight:${n?`bold`:`normal`};text-align:center;
        ">[${t}] ${a}${o}</div>`}).join(``):Bu.innerHTML=Wc.map((e,t)=>{let n=e===du.type,r=S[e]??`#ffffff`,i=Uc[e],a=i.name.split(` `)[0],o=t+1,s=``;if(n&&i.maxAmmo!==-1){let e=du.ammo;if(du.isReloading){let e=Math.round(du.reloadProgress*100),t=Math.round(du.reloadProgress*10);s=`<div style="font-size:10px;margin-top:3px;color:#ffcc44;">${`█`.repeat(t)+`░`.repeat(10-t)} ${e}%</div>`}else{let t=`●`.repeat(e)+`○`.repeat(i.maxAmmo-e);s=`<div style="font-size:10px;margin-top:3px;letter-spacing:1px;color:${e===0?`#ff4444`:r};">${t}</div>`}}return`<div style="
          padding:6px 14px;font-family:monospace;font-size:13px;border-radius:6px;
          background:${n?r+`33`:`rgba(0,0,0,0.45)`};
          border:2px solid ${n?r:`rgba(255,255,255,0.2)`};
          color:${n?r:`rgba(255,255,255,0.5)`};
          font-weight:${n?`bold`:`normal`};
          text-align:center;
        ">[${o}] ${a}${s}</div>`}).join(``)}else Bu.innerHTML=``;if(du.update(t,ou,Q,p,r,i),$.isLocalAuthority=wu.size===0||Au()===Su.peerId,$.update(t,f),v){for(let e of f)!e.isIt||e.isEliminated||(e.speedBoost*=Ld[zd.get(e)??`regular`].speedMult);for(let e of Vd)for(let t of p)t.isIt||t.isEliminated||e.containsXZ(t.position.x,t.position.z)&&(t.speedBoost*=e.slowFactor);let e=Q;if(e.isIt&&!e.isEliminated){let t=Ld[zd.get(e)??`regular`],n=f.filter(e=>!e.isIt&&!e.isEliminated).length,r=`${Math.max(0,e.hp)}/${t.hp}`;Lu.textContent=`[${t.label.toUpperCase()} ZOMBIE] HP: ${r}  |  Infect ${n} remaining!`}}if(d&&!s.isEliminated&&(s.speedBoost*=Ad.maskkiller.speedMult),$.mode.name===`Infection`){let e=(n?.boundary??22)-4;for(let e of f)!e.isIt||e.isEliminated||Cd.has(e)||e.hp<=0&&(e.setEliminated(!0),Cd.set(e,3));for(let[n,r]of Cd){let i=r-t;if(i<=0){Cd.delete(n);let t=Q,r;n===t?(r=Hd??`regular`,Hd=null,Ud=!1,Wu.style.display=`none`):r=Rd[Math.floor(Math.random()*Rd.length)],zd.set(n,r),n.hp=Ld[r].hp,n.setEliminated(!1),n.setFrozen(!1),n.tagImmunity=1.5,n.velocity.set(0,0,0),n.position.set((Math.random()*2-1)*e,2,(Math.random()*2-1)*e)}else Cd.set(n,i)}let r=Q;if(r.isIt&&r.isEliminated&&Cd.has(r)){let e=Cd.get(r)??0;Lu.textContent=`DEAD — respawning in ${e.toFixed(1)}s…`,Wu.style.display=`flex`,Gu.textContent=`Respawning in ${e.toFixed(1)}s — selection: ${(Hd??`regular`).toUpperCase()}`,Ud||(Ud=!0,Qu()),rd()}else r.isEliminated||(Wu.style.display=`none`)}if($.roundId!==wd){wd=$.roundId;let e=Td;Td=null,Ed=null,gd.clear(),_d.clear(),vd.clear(),xd.clear(),Sd.clear(),Cd.clear(),Dd.clear(),zd.clear(),Bd.clear();for(let e of Vd)e.dispose();Vd.length=0,Hd=null,Ud=!1,Wu.style.display=`none`,Md.clear(),Nd.clear(),Pd=null,Fd=!1,Id=8,qu.style.display=`none`,Od&&=(ou.remove(Od),null),kd&&=(ou.remove(kd),null);for(let e of f){let t=e;t.mesh&&t.mesh.traverse(e=>{e instanceof q&&(e.material.transparent=!1,e.material.opacity=1)})}if(du.setWeapon(`sword`),du.resetAmmo(),$.mode.name===`Tomfoolery`)hu(f),Hc(),Vc.isInvincible=e=>e.tagImmunity>=al;else if($.mode.name===`Infection`){bu(f),nl();for(let e of f)e.isIt&&zd.set(e,`regular`);Vc.onBiteHit=(e,t)=>{if(!(e.isIt||e.isEliminated))if(Ld[t?zd.get(t)??`regular`:`regular`].instantInfect)Qd(e);else{let t=(el.get(e)??0)+1;t>=3?Qd(e):el.set(e,t)}}}else $.mode.name===`Haunted`?(gu(),xu(),Hc(),Vc.onSwordHit=e=>(e.isIt||e.isEliminated||e.setEliminated(!0),0)):(gu(),xu(),Hc());if(wu.size>0){let t=[Su.peerId,...wu].sort();if(Au()===Su.peerId){if(Su.sendRoundSync($.mapIdx,$.modeIdx,$.roundId,$.timer),$.mode.name!==`Tomfoolery`){let e=t[$.roundId%t.length];Mu(e),Su.sendSetIt(e,$.roundId)}}else{Q.setIt(!1),Q.tagImmunity=2;for(let e of Cu.values())e.setIt(!1),e.tagImmunity=2;for(let e of $.bots)e.setIt(!1);e&&e.roundId===$.roundId&&Mu(e.peerId)}}}if(wu.size>0&&$.mode.name!==`Tomfoolery`){let e=Q,t=[];e.isIt&&t.push(Su.peerId);for(let[e,n]of Cu)n.isIt&&t.push(e);t.length>1&&(t.sort(),Mu(t[0]))}let C=Q;if(!C.isEliminated&&C.tagImmunity<=0&&$.mode.name!==`Haunted`){for(let[e,t]of Cu)if(!t.isEliminated&&!(C.position.distanceTo(t.position)>1.5)){if(C.isIt&&t.tagImmunity<=0){Ed=Su.peerId,C.setIt(!1),C.tagImmunity=2,t.setIt(!0),t.tagImmunity=0,Su.sendTag(Su.peerId,e);break}else if(t.isIt&&!C.isIt&&t.tagImmunity<=0){Ed=e,t.setIt(!1),t.tagImmunity=2,C.setIt(!0),C.tagImmunity=0,Su.sendTag(e,Su.peerId);break}}}if(dd&&(md+=t,md>=.05)){md=0;let e=Q;Su.sendState({username:pd,isAdmin:$.isAdmin,x:e.position.x,y:e.position.y,z:e.position.z,vx:e.velocity.x,vy:e.velocity.y,vz:e.velocity.z,yaw:Q.yaw,isFrozen:e.isFrozen,isEliminated:e.isEliminated,roundId:$.roundId,timeLeft:$.timer,joinedAt:ku,hauntedClass:c})}fd&&!Q.isEliminated&&!Q.isFrozen&&(Q.speedBoost*=2);let w=new R(Q.position.x,Q.position.y+.1,Q.position.z);$.updateTeleporters(t,w,Q,id);let T=Q.position;Ru.textContent=`x:${T.x.toFixed(1)}  y:${T.y.toFixed(1)}  z:${T.z.toFixed(1)}  ${uu.pointerLocked?``:`[click to capture mouse]`}`;let E=document.getElementById(`tmf-hud`),D=document.getElementById(`tmf-lives`),O=document.getElementById(`tmf-hp-bar`),ee=document.getElementById(`tmf-hp-text`);if(_){E.style.display=`block`;let e=Q,t=Math.max(0,e.hp),n=Math.max(0,e.lives),r=Math.round(t/100*100);D.textContent=`♥`.repeat(n)+`♡`.repeat(Math.max(0,3-n)),D.style.color=n>=2?`#ff3355`:n===1?`#ff8800`:`#666`,O.style.width=`${r}%`,O.style.background=r>50?`#44ff44`:r>25?`#ffcc00`:`#ff3300`,ee.textContent=`${t} / 100 HP`;for(let[e,t]of fu)(e.hp!==t.lastHp||e.lives!==t.lastLives)&&mu(t,e.hp,e.lives),t.sprite.visible=!e.isEliminated,e.isEliminated||t.sprite.position.set(e.position.x,e.position.y+2.85,e.position.z)}else if(v){E.style.display=`none`;for(let e of fu.values())e.sprite.visible=!1;for(let[e,t]of _u)(e.hp!==t.lastHp||e.isIt!==t.lastIsIt)&&yu(t,e),t.sprite.visible=!e.isEliminated,e.isEliminated||t.sprite.position.set(e.position.x,e.position.y+2.85,e.position.z)}else{E.style.display=`none`;for(let e of fu.values())e.sprite.visible=!1;for(let e of _u.values())e.sprite.visible=!1}if(ru(x&&!Q.isEliminated?du.type:null),o){for(let e of $.bots){let t=e;t.isIt&&!Md.has(t)&&Md.set(t,`ghost`)}ou.fog instanceof xt&&(ou.fog.density=l?Ad[c].fogDensity:.18);for(let e of p){let t=e;if(!t.mesh)continue;let n=1;e.isIt&&!e.isEliminated&&(n=$u(e)===`ghost`?.5:1),t.mesh.traverse(e=>{if(e instanceof q){let t=e.material;t.transparent=n<1,t.opacity=n}})}let e=p.find(e=>e.isIt&&!e.isEliminated);if(e){Od||(Od=new Ii(16716032,3.5,18),ou.add(Od));let t=$u(e)===`maskkiller`?16737792:11141375;Od.color.set(t),Od.position.set(e.position.x,e.position.y+1.5,e.position.z),Od.intensity=3+Math.sin(performance.now()*.004)*.8}else Od&&=(ou.remove(Od),null);if(!Q.isEliminated&&!d){kd||(kd=new Pi(16775406,6,44,Math.PI/5,.25),ou.add(kd),ou.add(kd.target));let e=new R;g.getWorldDirection(e),kd.position.set(Q.position.x,Q.position.y+1.55,Q.position.z),kd.target.position.copy(kd.position).addScaledVector(e,20),kd.target.updateMatrixWorld()}else kd&&=(ou.remove(kd),null);if(l&&!Md.has(s)?(Id=Math.max(0,Id-t),Ju.textContent=`Choosing in ${Math.ceil(Id)}s — default: GHOST`,qu.style.display=`flex`,Fd||(Fd=!0,td()),nd(),Id<=0&&ed(Pd??`ghost`)):qu.style.display=`none`,l&&Md.has(s)){let e=p.filter(e=>!e.isIt&&!e.isEliminated).length;Lu.textContent=`[${Ad[c].label.toUpperCase()}] Eliminate ${e} survivor${e===1?``:`s`}!`}}else Od&&=(ou.remove(Od),null),kd&&=(ou.remove(kd),null),qu.style.display=`none`;ef(a,r,i,$.mode.name),au.autoClear=!0,au.render(ou,g),au.autoClear=!1,iu(au,window.innerWidth/window.innerHeight),au.autoClear=!0}nf()})();