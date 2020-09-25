import { mount } from  '@vue/test-utils'
import App from  '@/App.vue'

    const  wrapper = mount(App);

    const nameTag = wrapper.find('.pokemon-name')

    const lastNameValue = nameTag.text()

    const imgTag = wrapper.find('img')

    const lastImgValue = imgTag.attributes().src

    const typeTag = wrapper.find('#type')

    const lastTypeValue = typeTag.text()

    const weightTag = wrapper.find('#weight')

    const lastWeightValue = weightTag.text()

    const heightTag = wrapper.find('#height')

    const lastHeightValue = heightTag.text()

    const abilitiesTag = wrapper.find('ul')

    const lastAbilitiesValue = abilitiesTag.text()

    describe('Validar Cambios', () => {
        const btn = wrapper.find('button')
        btn.trigger('click')
    
        test('should change name', async () => {
            expect(nameTag.text()).toContain('name')
            await wrapper.vm.$nextTick()
                .then( () => { 
                    expect(nameTag.text()).toBe(lastNameValue)
                 })
        })
    
        test('should change name', async () => {
            expect(imgTag.attributes().src).toBe('')
            await wrapper.vm.$nextTick()
                .then( () => { 
                    expect(imgTag.attributes().src).toBe(lastImgValue)
                 })
        })
    
        test('should change name', async () => {
            expect(typeTag.attributes().src).toBe('')
            await wrapper.vm.$nextTick()
                .then( () => { 
                    expect(typeTag.attributes().src).toBe(lastTypeValue)
                 })
        })
    
        test('should change name', async () => {
            expect(weightTag.attributes().src).toBe(0)
            await wrapper.vm.$nextTick()
                .then( () => { 
                    expect(weightTag.attributes().src).toBe(lastWeightValue)
                 })
        })
    
        test('should change name', async () => {
            expect(heightTag.attributes().src).toBe(0)
            await wrapper.vm.$nextTick()
                .then( () => { 
                    expect(heightTag.attributes().src).toBe(lastHeightValue)
                 })
        })
    
        test('should change name', async () => {
            expect(abilitiesTag.attributes().src).toBe([])
            await wrapper.vm.$nextTick()
                .then( () => { 
                    expect(abilitiesTag.attributes().src).toBe(lastAbilitiesValue)
                 })
        })
    })