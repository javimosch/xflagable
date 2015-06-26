<xtest>
  
  <div>
    <h4>#Initialization</h4>
    <h6>Ony any object</h6>
       <pre>    
                xflagable(riot);
    </pre>
    <h4>#Demos</h4>

     <div id="demo2">
      <h6>Create flag using create action (2 keys, 5 callback)</h6>
      <ol>
        <li>Action name</li>
        <li>Flag name</li>
        <li>Array of flag keys (strings)</li>
        <li>(opcional) callback or array of callbacks</li>
      </ol>
              <pre>    
                  riot.$flag('create', 'demo2Flag',['Demo 2 Key 1','Demo 2 Key 1'],myCallbackFnArr);
      </pre>
      <ul>
        <li each={ demo2items } class={ completed: done }>
          <input type="checkbox" checked={ done } onchange={this.parent.demo2check} > { title }
        </li>
      </ul>
      <output>{demo2ouput||'Waiting user action...'}</output>
    </div>


    <div id="demo1">
      <h6>Create flag using createFromArray action (3 keys, 1 callback)</h6>
      <ol>
        <li>Action name</li>
        <li>Flag name</li>
        <li>Array</li>
        <li>PropertyName of Object inside Array</li>
        <li>(opcional) callback or array of callbacks</li>
      </ol>
              <pre>    
                  riot.$flag('createFromArray', 'checkFlag', this.items, 'title',myCallbackFnArr);
      </pre>
      <ul>
        <li each={ items } class={ completed: done }>
          <input type="checkbox" checked={ done } onchange={this.parent.demo1check} > { title }
        </li>
      </ul>
      <output>{demo1ouput||'Waiting user action...'}</output>
    </div>

    
  </div>


  <style scoped>
    div{
      margin:5px;
    }
    pre,ol,output{
      font-size:11px;
      border:1px solid black;
      margin:20px;
      padding:5px;
    }

  </style>

	
  var self = this;
  //Initialization
  xflagable(riot);


  //Demo#2
  this.demo2items = [{
    title: 'Demo 2 Key 1',
    done: false
  }, {
    title: 'Demo 2 Key 2',
    done: false
  }]
  riot.$flag('create', 'demo2Flag', ['Demo 2 Key 1','Demo 2 Key 2'], function() {
    self.demo2ouput = 'demo2Flag rised!';
    self.update();
  });
  demo2check(e) {
    e.item.done = !e.item.done;
    this.update();
    riot.$flag('set', 'demo2Flag', e.item.title, e.item.done);
    return false;
  }

  //Demo#1
  this.items = [{
    title: 'Flag Key 1',
    done: false
  }, {
    title: 'Flag Key 2',
    done: false
  }, {
    title: 'Flag Key 3',
    done: false
  }]
  riot.$flag('createFromArray', 'checkFlag', this.items, 'title', function() {
    self.demo1ouput = 'checkFlag rised!';
    self.update();
  });
  demo1check(e) {
    e.item.done = !e.item.done;
    this.update();
    riot.$flag('set', 'checkFlag', e.item.title, e.item.done);
    return false;
  }


  


	//
</xtest>