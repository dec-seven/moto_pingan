type Point = {
  X:number,
  Y:number
}

export default class BoardCanvas  {
  container:HTMLElement
  canvas:HTMLCanvasElement
  ctx:CanvasRenderingContext2D
  startX:number
  startY:number
  pathSegmentHistory:Array<ImageData>
  index:number
  allPoints:Array<Array<Point>>
  constructor(container:HTMLElement) {
    // 容器
    this.container = container
    // canvas画布
    this.canvas = this.createCanvas(container)
    // 绘制工具
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D
    // 起始点位置
    this.startX = 0
    this.startY = 0
    // 画布历史栈
    this.pathSegmentHistory = []
    this.index = 0
    this.allPoints = []
    // 初始化
    this.init()
  }
  // 创建画布
  createCanvas(container:HTMLElement) {    
    const canvas = document.createElement('canvas')
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight
    canvas.style.display = 'block'
    canvas.style.backgroundColor = '#fef0dd'
    container.appendChild(canvas)
    return canvas
  }

  // 初始化
  init() {
    this.addPathSegment([])
    // 设置画笔
    this.setContext2DStyle()
    // 阻止默认右击事件
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault())
    // 自定义鼠标按下事件
    this.canvas.addEventListener('mousedown', this.mousedownEvent.bind(this))
    // 自定义键盘按下事件
    // window.document.addEventListener('keydown', this.keydownEvent.bind(this))
    this.drawLines()
  }

  // 设置画笔样式
  setContext2DStyle() {
    this.ctx.strokeStyle = '#0a71a0'
    this.ctx.lineWidth = 3
    this.ctx.lineCap = 'round'
    this.ctx.lineJoin = 'round'
  }

  // 鼠标按下
  mousedownEvent(e:MouseEvent){
    const points:Array<Point> = []
    const ctx = this.ctx
    // 开始路径
    ctx.beginPath()
    ctx.moveTo(e.offsetX, e.offsetY)
    points.push({X:e.offsetX,Y:e.offsetY})
    ctx.stroke()
    this.canvas.onmousemove = function (e) {
      // 绘制直线，绘制的直线
      ctx.lineTo(e.offsetX, e.offsetY)
      points.push({X:e.offsetX,Y:e.offsetY})
      ctx.stroke()
    }
    const that = this
    this.canvas.onmouseup = this.canvas.onmouseout = function () {
      that.addPathSegment(points)
      this.onmousemove = null
      this.onmouseup = null
      this.onmouseout = null
    }
  }

  // 添加路径片段
  addPathSegment(points:Array<Point>) {
    const data = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
    points.length > 0 && this.allPoints.push(points)
    console.log(this.allPoints);
    
    // 删除当前索引后的路径片段，然后追加一个新的路径片段，更新索引
    this.pathSegmentHistory.splice(this.index + 1)
    this.pathSegmentHistory.push(data)    
    this.index = this.pathSegmentHistory.length - 1
  }

  drawLines(){
    const allPoints:Point[][] = []
    const ctx = this.ctx
    allPoints.forEach(points => {
      ctx.beginPath()
      ctx.moveTo(points[0].X, points[0].Y)
      ctx.stroke()
      points.forEach(point => {
        // 开始路径
        ctx.lineTo(point.X, point.Y)
        ctx.stroke()
      })
    });
  }

}
