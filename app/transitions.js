export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('marvel'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};