
export default class BoardCanvas  {
  container:HTMLElement
  canvas:HTMLCanvasElement
  ctx:CanvasRenderingContext2D
  startX:number
  stateY:number
  pathSegmentHistory:Array<HTMLCanvasElement>
  index:number
  constructor(container:HTMLElement) {
    // 容器
    this.container = container
    // canvas画布
    this.canvas = this.createCanvas(container)
    // 绘制工具
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    // 起始点位置
    this.startX = 0
    this.stateY = 0
    // 画布历史栈
    this.pathSegmentHistory = []
    this.index = 0

    // 初始化
    this.init()
  }
  // 创建画布
  createCanvas(container:HTMLElement) {
    const canvas = document.createElement('canvas')
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight
    canvas.style.display = 'block'
    canvas.style.backgroundColor = 'antiquewhite'
    container.appendChild(canvas)
    return canvas
  }

  // 初始化
  init() {
    this.addPathSegment()
    this.setContext2DStyle()
    // 阻止默认右击事件
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault())
    // 自定义鼠标按下事件
    this.canvas.addEventListener('mousedown', this.mousedownEvent.bind(this))
    // 自定义键盘按下事件
    window.document.addEventListener('keydown', this.keydownEvent.bind(this))
  }

  // 设置画笔样式
  setContext2DStyle() {
    this.ctx.strokeStyle = '#EB7347'
    this.ctx.lineWidth = 3
    this.ctx.lineCap = 'round'
    this.ctx.lineJoin = 'round'
  }
}
