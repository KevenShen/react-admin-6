import {
  FireFilled,
  FolderAddFilled,
  InteractionFilled,
  LayoutFilled,
  LikeFilled,
  MacCommandFilled,
  MediumCircleFilled,
  MessageFilled,
  ProjectFilled,
  RedditCircleFilled,
  RobotFilled,
  SketchCircleFilled,
  TagFilled,
  TrophyFilled
} from '@ant-design/icons'
import Sortable from 'sortablejs'

const DragM = () => {
  useEffect(() => {
    const sortable = document.querySelector('.drag-box .ant-row')
    new Sortable(sortable, {
      animation: 150,
      forceFallback: true,
      fallbackClass: 'dragged-item'
    })
  }, [])
  return (
    <div className="drag-box">
      <Row gutter={[10, 10]}>
        <Col className="gutter-row">
          <div className="item-box">
            <FireFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <SketchCircleFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <MacCommandFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <LayoutFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <LikeFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <RedditCircleFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <TagFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <TrophyFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <FolderAddFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <ProjectFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <InteractionFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <MessageFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <RobotFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
        <Col className="gutter-row">
          <div className="item-box">
            <MediumCircleFilled style={{ color: '#eb2f96' }} />
            <p>拖拽</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DragM
